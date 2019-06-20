const express = require('express');
const port = 3002;
const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`App listening on port ${port}`));