import EventEmitter from "events";

const chatApp = new EventEmitter();

export function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message);
}
chatApp.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

sendMessage("Max", "Hello, collegs!", chatApp);
sendMessage("Mykola", "Hi, Max!", chatApp);
sendMessage("Dima", "Good morning!", chatApp);
sendMessage("Olga", "How's everyone doing?", chatApp);
