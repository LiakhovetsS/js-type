import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WTF } from '../dist/index.js';

test('WTF detects array', () => {
  assert.equal(WTF([1,2,3]), 'array');
});

test('WTF detects date', () => {
  assert.equal(WTF(new Date()), 'date');
});

test('WTF detects regexp', () => {
  assert.equal(WTF(/abc/), 'regexp');
});

test('WTF detects null and undefined', () => {
  assert.equal(WTF(null), 'null');
  assert.equal(WTF(undefined), 'undefined');
});

test('WTF detects object and function', () => {
  assert.equal(WTF({}), 'object');
  assert.equal(WTF(() => {}), 'function');
});

test('error true/false (intentional mismatch)', () => {
  assert.notStrictEqual(WTF(123), 'string');
});
