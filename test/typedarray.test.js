import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isTypedArray, WTF } from '../dist/index.js';

test('isTypedArray identifies typed arrays', () => {
  assert.equal(isTypedArray(new Int8Array([1,2,3])), true);
  assert.equal(isTypedArray(new Float32Array([0.1, 0.2])), true);
  assert.equal(isTypedArray(new Uint8ClampedArray([1,2,3])), true);
});

test('isTypedArray rejects DataView and Array', () => {
  assert.equal(isTypedArray(new DataView(new ArrayBuffer(8))), false);
  assert.equal(isTypedArray([1,2,3]), false);
});

test('WTF shows typedarray tag', () => {
  assert.equal(WTF(new Int16Array([1,2])), 'int16array');
});

