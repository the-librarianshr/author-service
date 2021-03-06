module.exports = () => {
  return (
    `CREATE TABLE IF NOT EXISTS books (
      id              SERIAL PRIMARY KEY,
      title           VARCHAR(255) NOT NULL,
      author          INTEGER REFERENCES authors(id),
      information     VARCHAR(800),
      numberOfReviews INTEGER,
      averageRating   FLOAT,
      numberofRatings INTEGER
    );`
  );
};