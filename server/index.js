const express = require('express');
const port = 3002;
const app = express();
const db = require('../database/index');

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());

app.get('/db/init', (req, res) => {
  db.initialize();
  res.end();
});

app.get('/get-author/:id', (req, res) => {
  let id = req.params.id;
  db.getAuthorById(id, (err, author) => {
    if (err) {
      res.end(JSON.stringify(err));
    } else {
      db.getBooksByAuthorId(id, (err, books) => {
        if (err) {
          res.end(JSON.stringify(err));
        } else {
          author.books = books;
          res.json(author);
        }
      });
    }
  });
});

app.use('/authors/:id', express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../public'));


app.listen(port, () => console.log(`App listening on port ${port}`));