import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const authorizationHeader = req.headers.authorization;
  res.hasHeader("Content-Type", "text/plain; charset=utf-8");

  if (!authorizationHeader) {
    res.writeHead(401);
    res.end("Unauthorized: Authorization header is missing.");
  } else {
    res.writeHead(200);
    res.end("Authorization header received. Value: " + authorizationHeader);
  }
});

server.listen(PORT, () => {
  console.log("Server running and listen port: 3000");
});
