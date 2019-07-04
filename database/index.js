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

let initialize = () => {
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
};

let getAuthorByBookId = (id, callback) => {
  db.any(`SELECT author FROM books WHERE id = ${id}`)
    .then(authorID => {
      callback(null, authorID);
    })
    .catch(err => {
      callback(err, null);
    });
};

let getAuthorById = (id, callback) => {
  db.any(`SELECT * FROM authors WHERE id = ${id}`)
    .then(author => {
      author = author[0];
      callback(null, author);
    })
    .catch(err => {
      callback(err, null);
    });
};

let getBooksByAuthorId = (id, callback) => {
  db.any(`SELECT * FROM books WHERE author = ${id}`)
    .then(books => {
      callback(null, books);
    })
    .catch(err => {
      callback(err, null);
    });
};

let getBookById = (id, callback) => {
  db.any(`SELECT * FROM books WHERE id = ${id}`)
    .then(book => {
      callback(null, book);
    })
    .catch(err => {
      callback(err, null);
    });
};

module.exports = {
  getAuthorById: getAuthorById,
  initialize: initialize,
  getBooksByAuthorId: getBooksByAuthorId,
  getAuthorByBookId: getAuthorByBookId,
  getBookById: getBookById
};