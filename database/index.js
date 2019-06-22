const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize('fec', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
});

let auth = () => sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Author extends Model {}
Author.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.STRING(800)
  },
  followers: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'authors'
});

class Book extends Model {}
Book.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.INTEGER,
    references: {
      model: 'authors',
      key: 'id'
    }
  },
  information: {
    type: Sequelize.STRING(800),
    allowNull: false
  },
  numberOfReviews: {
    type: Sequelize.INTEGER
  },
  averageRating: {
    type: Sequelize.FLOAT
  },
  numberOfRatings: {
    type: Sequelize.INTEGER
  },


}, {
  sequelize,
  modelName: 'books'
});

class Review extends Model {}
Review.init({
  reviewer:{
    type: Sequelize.STRING,
    allowNull: false
  },
  book: {
    type: Sequelize.INTEGER,
    references: {
      model: 'books',
      key: 'id'
    }
  },
  stars: {
    type: Sequelize.ENUM(1, 2, 3, 4, 5)
  },
  body: {
    type: Sequelize.STRING(800)
  }
}, {
  sequelize,
  modelName: 'reviews'
});

sequelize.sync({ force: true });

module.exports.authenticate = auth;