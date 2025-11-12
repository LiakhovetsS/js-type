import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isArguments, WTF } from '../dist/index.js';

function getArgs() { return arguments; }

test('isArguments detects arguments object', () => {
  const args = getArgs(1,2,3);
  assert.equal(isArguments(args), true);
  assert.equal(WTF(args), 'arguments');
});

test('isArguments rejects plain objects/arrays', () => {
  assert.equal(isArguments([1,2,3]), false);
  assert.equal(isArguments({0:1, length:1}), false);
});

