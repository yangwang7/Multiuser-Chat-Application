const users = ['Alice', 'Rabbit'];

const messages = [
  {
    sender: 'Alice',
    timestamp: new Date().toLocaleTimeString(),
    text: "Hello?"
  },
  {
    sender: "Rabbit",
    timestamp: new Date().toLocaleTimeString(),
    text: "Hi! I'm in a hurry."
  }
];

function addMessage({ sender, timestamp, text }) {
  messages.push({sender, timestamp, text});
}
 
function addUser({ username }) {
  if(users.indexOf(username) < 0){
    users.push(username);
  }
}

function removeUser({ username }){
  users.splice(users.indexOf(username), 1);
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  removeUser
};

module.exports = chat;
