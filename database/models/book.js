module.exports = (sequelize, DataTypes) => {
  return sequelize.define('book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.INTEGER,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    information: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    numberOfReviews: {
      type: DataTypes.INTEGER
    },
    averageRating: {
      type: DataTypes.FLOAT
    },
    numberOfRatings: {
      type: DataTypes.INTEGER
    },
  });
};