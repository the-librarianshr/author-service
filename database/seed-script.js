const faker = require('faker');
const fs = require('fs');
const promise = require('bluebird');
const output = __dirname + '/seed.sql';
const fsAsync = promise.promisifyAll(fs);
const exec = require('child_process').exec;
const config = require('../config');

let randomIntFromOne = max => {
  return Math.ceil(Math.random() * max);
};

let insertBuilder = (tableName, obj) => {
  return `INSERT INTO ${tableName} (${Object.keys(obj).join(', ')}) VALUES (${Object.values(obj).join(', ')});`;
};

let replaceSingleQuotes = string => {
  return string.replace('\'', '\'\'');
};

fsAsync.writeFileAsync(output, 'TRUNCATE books, reviews, authors CASCADE;')
  .then(() => {
    // create 100 authors
    for (let i = 1; i <= 100; i++) {
      let author = {
        id: i,
        firstname: '\'' + replaceSingleQuotes(faker.name.firstName()) + '\'',
        lastname: '\'' + replaceSingleQuotes(faker.name.lastName()) + '\'',
        bio: '\'' + replaceSingleQuotes(faker.lorem.paragraphs(2)) + '\'',
        followers: randomIntFromOne(1000),
        avatar: '\'' + faker.image.people(50, 50) + '\''
      };

      fs.appendFileSync(output, insertBuilder('authors', author));
    }

  })
  .then(() => {
    // create 100 books
    for (let i = 1; i <= 100; i++) {
      let book = {
        id: i,
        title: '\'' + replaceSingleQuotes(faker.lorem.words(randomIntFromOne(3))) + '\'',
        author: randomIntFromOne(100),
        information: '\'' + replaceSingleQuotes(faker.lorem.paragraphs(2)) + '\'',
        numberofreviews: randomIntFromOne(250),
        averagerating: randomIntFromOne(5),
        numberofratings: randomIntFromOne(500)
      };

      fs.appendFileSync(output, insertBuilder('books', book));
    }
  })
  .then(() => {
    // create 300 reviews
    for (let i = 1; i <= 300; i++) {
      let review = {
        id: i,
        reviewer: '\'' + replaceSingleQuotes(faker.name.firstName()) + ' ' + replaceSingleQuotes(faker.name.lastName()) + '\'',
        book: randomIntFromOne(100),
        stars: randomIntFromOne(5),
        body: '\'' + replaceSingleQuotes(faker.lorem.sentences(randomIntFromOne(5))) + '\''
      };

      fs.appendFileSync(output, insertBuilder('reviews', review));
    }
  })
  .then(() => {
    exec(`psql ${config.database.database} < ${__dirname}/seed.sql`, (stdout, stderr) => {
      if (stderr) {
        console.log(stderr);
      } else {
        console.log(stdout);
      }
    });
  })
  .catch(err => {
    console.log(err);
  });