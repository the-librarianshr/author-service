const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const config = require('../config').database;
const Author = require('./models/author');
const Book = require('./models/book');
const Review = require('./models/review');

const sequelize = new Sequelize(config.database, config.login, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect
});

Author(sequelize, Sequelize.DataTypes);
Book(sequelize, Sequelize.DataTypes);
Review(sequelize, Sequelize.DataTypes);

sequelize.sync();

// module.exports.authenticate = auth;