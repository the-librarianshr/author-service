module.exports = (sequelize, DataTypes) => {
  return sequelize.define('author', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING(800)
    },
    followers: {
      type: DataTypes.INTEGER
    }
  });
};