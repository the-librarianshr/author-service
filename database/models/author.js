module.exports = () => {
  return (
    `CREATE TABLE IF NOT EXISTS authors (
      id              SERIAL PRIMARY KEY,
      firstName       VARCHAR(255) NOT NULL,
      lastName        VARCHAR(255),
      bio             VARCHAR(800),
      followers       INTEGER
    );`
  );
};