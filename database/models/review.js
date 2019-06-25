module.exports = (sequelize, DataTypes) => {
  return sequelize.define('review', {
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book: {
      type: DataTypes.INTEGER,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    stars: {
      type: DataTypes.INTEGER(5)
    },
    body: {
      type: DataTypes.STRING(800)
    }
  });
};