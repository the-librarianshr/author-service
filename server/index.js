const express = require('express');
const port = 3002;
const app = express();
const db = require('../database/index');

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(__dirname + '/../public'));

app.get('/authors/:id', (req, res) => {
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
          res.end(JSON.stringify(author));
        }
      });
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));