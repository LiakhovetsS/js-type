import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isString, isNumber, isArray, isNull, isUndefined } from '../dist/index.js';

test('isString true/false', () => {
  assert.equal(isString('hello'), true);
  assert.equal(isString(123), false);
});

test('isNumber true/false', () => {
  assert.equal(isNumber(123), true);
  assert.equal(isNumber('123'), false);
});

test('isArray true/false', () => {
  assert.equal(isArray([1,2]), true);
  assert.equal(isArray({}), false);
});

test('null/undefined', () => {
  assert.equal(isNull(null), true);
  assert.equal(isUndefined(undefined), true);
});

