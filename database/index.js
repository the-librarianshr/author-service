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
  .then(() => {
    console.log('Authors initialized');
    return db.any(book());
  })
  .then(() => {
    console.log('Books initialized');
    return db.any(review());
  })
  .then(() => console.log('Reviews initialized'));

let getAuthorById = (id, callback) => {
  db.any(`SELECT * FROM authors WHERE id = ${id}`)
    .then(author => {
      callback(null, author);
    })
    .catch(err => {
      callback(err, null);
    });
};

module.exports = {
  getAuthorById: getAuthorById
};