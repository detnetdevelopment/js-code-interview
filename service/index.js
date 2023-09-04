// const http = require('http');
const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

app.get("/", (req, res, next) => {
  console.log("Rxed GET");
  res.status(200);
});
