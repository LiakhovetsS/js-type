import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Type } from '../dist/index.js';

test('Type static methods', () => {
  assert.equal(Type.isString('a'), true);
  assert.equal(Type.isNull(null), true);
  assert.equal(Type.WTF([]), 'array');
});

