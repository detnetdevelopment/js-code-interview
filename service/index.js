const express = require("express");
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors())

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

const db = new sqlite3.Database('./chinook.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

app.get("/", (req, res, next) => {
  console.log("Rxed GET");
  res.status(200);
});

app.get("/albums", async (req, res) => {
  console.log("Rxed /test");
  db.all("SELECT COUNT(*) FROM albums", [], async (err, qres) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      count = qres[0]['COUNT(*)'];

      const getRow = (id) => {
        return new Promise((resolve, reject) => { 
          db.all("SELECT * FROM albums WHERE AlbumId = ?", [id], (err, row) => {
            if (err) {
              return reject(err.message);
            }
            console.log(row);
            return resolve(row);
          });
        });
      }

      rows = [];
      for (let i = 1; i <= count; i++) {
        try {
          let result = await getRow(i);
          rows.push(result[0]);
        } catch (err) {
          console.log(err);
          res.status(400).json({ "error": err });
          return;
        }
      }
      res.status(200).json({ rows });
  });
});

app.get("/customer/cities", (req, res) => {
  db.all("SELECT City FROM customers", [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      console.log(rows);
      res.status(200).json({ rows });
  });
});

app.get("/customer/countries", (req, res) => {
  db.all("SELECT Country FROM customers", [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      console.log(rows);
      res.status(200).json({ rows });
  });
});

app.get("/customer/supportrepid", (req, res) => {
  db.all("SELECT SupportRepId FROM customers", [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      console.log(rows);
      res.status(200).json({ rows });
  });
});