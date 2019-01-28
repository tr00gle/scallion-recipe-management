/* eslint-disable no-undef */
const utils = require('./utils');


test('can detect if an error is present', () => {
  expect(utils.ifContainsError()).toBe('sad');
  const newError = new Error('hi, i am an error');
  expect(utils.ifContainsError(newError)).toBe('yay');
});
