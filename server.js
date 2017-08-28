const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/count', (req, res) => {
  res.send({succes:true});
});

http.listen(port, () => {
  console.log('listening on *:' + port);
});
