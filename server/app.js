const express = require("express");
const http = require("http");
const port = 3500 || process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["http://localhost:8080"],
  },
});

app.get("/", (req, res) => {
  res.sendStatus(200);
});

let userList = [];

//Run when client connect
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("new-user", (username) => {
    userList.push(username);
    console.log(userList);
    io.emit("users", userList);
  });

  socket.on("message", (msg) => {
    io.emit("broadcast", ` ${msg}`);
  });
});

server.listen(port, () => {
  console.log("The server has started at port", port);
});
