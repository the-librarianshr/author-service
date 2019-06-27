const faker = require('faker');

let randomIntFromOne = max => {
  return Math.ceil(Math.random() * max);
}

// create 100 books
for (let i = 0; i < 100; i++) {
  let book = {
    title: faker.lorem.words(randomIntFromOne(3));
  }
}

// create 100 authors

// create 300 reviews