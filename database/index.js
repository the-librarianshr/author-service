const promise = require('bluebird');
const initOpts = { promiseLib: promise };
const pgp = require('pg-promise')(initOpts);
const config = require('../config').database;
const connection = {
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.login,
  password: config.password
};

const db = pgp(connection);

const author = require('./models/author');
const book = require('./models/book');
const review = require('./models/review');

db.any(author())
  .then(() => console.log('Authors initialized'));
db.any(book())
  .then(() => console.log('Books initialized'));
db.any(review())
  .then(() => console.log('Reviews initialized'));

// module.exports.authenticate = auth;