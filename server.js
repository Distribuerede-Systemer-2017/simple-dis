const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const io = require("socket.io")(http);

let counter = 0;

//Endpoints
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/count', (req, res) => {
  res.send({count:counter});
});

//Sockets
io.on('connection', (client) => {

  console.log("Client connected");

  client.on('count', (data) => {
    counter++;
    io.sockets.emit('count', counter);
  });
  client.on('disconnect', () =>{
    console.log("Client disconnected");
  });
});

//Server
http.listen(port, () => {
  console.log('listening on *:' + port);
});
