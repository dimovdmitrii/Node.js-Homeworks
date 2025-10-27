const socket = io("http://localhost:5001");

const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatContainer = document.getElementById("chatContainer");

socket.on("connect", () => {
  console.log("Connected to sever");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("messageReceived", (data) => {
  console.log("Confirmed from server received", data);
  addMessageToChat(data.text);
});

function addMessageToChat(text) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = text;
  messageDiv.style.margin = "5px 0";
  messageDiv.style.padding = "5px";
  messageDiv.style.backgroundColor = "#f0f0f0";
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (message && socket.connected) {
    socket.emit("message", message);
    messageInput.value = "";
  }
}

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
