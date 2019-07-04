const db = require('../database/index');
const mockCallback = jest.fn(() => done());

describe('Get Author By ID:', () => {
  db.any = () => {
    return {
      'id': 1,
      'firstname': 'Porter',
      'lastname': 'Skiles',
      'bio': 'Impedit aut minima',
      'followers': 291,
      'avatar': 'http://lorempixel.com/50/50/people'
    };
  };

  test('is a function', () => {
    expect(typeof db.getAuthorById).toBe('function');
  });

  // test('uses an error first callback pattern', () => {
  //   db.getAuthorById(1, mockCallback);
  //   expect(mockCallback.mock.calls.length).toBe(1);
  // });

  // test('returns an author object', () => {
  //   let result = db.getAuthorById(1, mockCallback);
  //   expect(Array.isArray(result)).toBe(false);
  //   expect(typeof result).toBe('object');
  // });

  // test('returns an object with the proper key/values', () => {
  //   let result = db.getAuthorById(1, mockCallback);
  //   expect(result.id).toBe(1);
  //   expect(result.firstname).toBe('Porter');
  //   expect(result.lastname).toBe('Skiles');
  //   expect(result.bio).toBe('Impedit aut minima');
  //   expect(result.followers).toBe(291);
  //   expect(result.avatar).toBe('http://lorempixel.com/50/50/people');
  // });
});