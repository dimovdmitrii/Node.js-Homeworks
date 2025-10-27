import { Server } from "socket.io";
import { createServer } from "node:http";

const createWsServer = () => {
  const httpServer = createServer();
  const wsServer = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  wsServer.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });

    socket.on("message", (data) => {
      console.log("Received message from", socket.id, ":", data);

      socket.emit("messageReceived", {
        id: Date.now(),
        text: `Confirmation: message "${data}" received from server`,
        timestamp: new Date().toLocaleTimeString(),
        from: "server",
      });
    });
  });

  const wsPort = Number(process.env.WS_PORT) || 5000;

  httpServer.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(
        `Port ${wsPort} is already in use, trying port ${wsPort + 1}`,
      );
      httpServer.listen(wsPort + 1, () => {
        console.log(`WebSocket server running on ${wsPort + 1} port`);
      });
    } else {
      console.error("WebSocket server error:", err);
    }
  });

  httpServer.listen(wsPort, () => {
    console.log(`WebSocket server running on ${wsPort} port`);
  });
};

export default createWsServer;
