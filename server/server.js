const express = require('express');
const chat = require('./chat');
const app = express();
const PORT = 4000;

app.post("/users", express.json(), (req, res)=>{
	chat.addUser({ username: req.body.loginUser });
	res.json({
		messages: chat.messages,
		users: chat.users
	});
})

app.delete("/users", express.json(), (req, res)=>{
	chat.removeUser({ username:req.body.loginUser });
	res.json({});
})

app.get("/chat", (req, res)=>{
	res.json({
		messages: chat.messages,
		users: chat.users
	});
});

app.post("/chat", express.json(), (req, res)=>{
	chat.addMessage({ 
		sender: req.body.sender, 
		text: req.body.message,
		timestamp: new Date().toLocaleTimeString()
	});
	res.json({ messages: chat.messages });
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

