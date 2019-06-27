module.exports = () => {
  return (
    `CREATE TABLE IF NOT EXISTS reviews (
      id              SERIAL PRIMARY KEY,
      reviewer        VARCHAR(255) NOT NULL,
      book            INTEGER REFERENCES books(id),
      stars           INTEGER,
      body            VARCHAR(800)
    );`
  );
};