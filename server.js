const express = require("express");
const app = express();
const http = require('http').Server(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/count', (req, res) => {
  res.send({succes:true});
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
