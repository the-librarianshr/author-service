const express = require('express');
const port = 3002;
const app = express();
const db = require('../database/index');

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));

app.get('/authors/:id', (req, res) => {
  let id = req.params.id;
  db.getAuthorById(id, (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    } else {
      res.end(JSON.stringify(data));
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));