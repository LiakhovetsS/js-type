# js-type-guard 🚀

Lightweight, fast, and practical type-check utilities for JavaScript and TypeScript developers. js-type-guard gives you a small set of predictable helpers to check runtime values — clear API, zero fuss, ready for production. ✨

Why choose js-type-guard? 🎯

- Minimal and focused: a compact collection of common type checks (strings, numbers, arrays, dates, regex, etc.).
- Predictable results: simple boolean utilities you can rely on in runtime guards and validation flows.
- TypeScript-friendly: shipped with TypeScript declarations so IDEs give great autocomplete and hints.
- Zero dependencies: tiny footprint, easy to audit and include in any project.

Install

```bash
npm install js-type-guard
# or
yarn add js-type-guard
```

Quick start — JavaScript (CommonJS)

```js
const { isString, isArray, WTF } = require('js-type-guard');

console.log(isString('hello')); // true
console.log(isArray([1,2,3])); // true
console.log(WTF([1,2,3])); // 'array' 😄
```

Plain JavaScript — Node.js (require)

If you're using plain Node.js with CommonJS modules, you can require the whole module or destructure the helpers.

```js
// destructure specific helpers
const { isString, WTF } = require('js-type-guard');

console.log(isString('hello')); // true
console.log(WTF(/abc/)); // 'regexp' 🎯

// or require the module as an object
const jsType = require('js-type-guard');
console.log(jsType.WTF(new Date())); // 'date'
```

Quick start — TypeScript / ESM

```ts
import { isNumber, isRegExp, WTF } from 'js-type-guard';

if (isNumber(value)) {
  // runtime check passed — value is a number at runtime
}

const rx = /abc/;
console.log(isRegExp(rx)); // true
console.log(WTF(rx)); // 'regexp' 🎯
```

Class usage (optional)

```ts
import { Type } from 'js-type-guard';

console.log(Type.isString('a')); // true
console.log(Type.isNull(null)); // true
console.log(Type.WTF(new Date())); // 'date'
```

API

| Function            | Description                                                                                       | Returns   |
|---------------------|---------------------------------------------------------------------------------------------------|----------:|
| isString(value)     | Checks if value is a string (primitive or String object)                                          |   boolean |
| isNumber(value)     | Checks if value is a number (primitive or Number object)                                          |   boolean |
| isBoolean(value)    | Checks if value is a boolean                                                                      |   boolean |
| isDate(value)       | Checks if value is a Date instance                                                                |   boolean |
| isFunction(value)   | Checks if value is a function                                                                     |   boolean |
| isArray(value)      | Checks if value is an Array                                                                       |   boolean |
| isObject(value)     | Checks if value is a plain Object ("[object Object]")                                             |   boolean |
| isUndefined(value)  | Checks if value is undefined                                                                      |   boolean |
| isNull(value)       | Checks if value is null                                                                           |   boolean |
| isRegExp(value)     | Checks if value is a RegExp instance                                                              |   boolean |
| isMap(value)        | Checks if value is a Map instance                                                                 |   boolean |
| isSet(value)        | Checks if value is a Set instance                                                                 |   boolean |
| isSymbol(value)     | Checks if value is a Symbol                                                                       |   boolean |
| isError(value)      | Checks if value is an Error instance                                                              |   boolean |
| isBigInt(value)     | Checks if value is a BigInt                                                                       |   boolean |
| isArguments(value)  | Checks if value is an arguments object                                                            |   boolean |
| isTypedArray(value) | Checks if value is a TypedArray (e.g., Int8Array, Uint8Array)                                     |   boolean |
| WTF(value)          | Returns the runtime type string (lowercased, e.g. 'array', 'date', 'regexp', 'null', 'undefined') |    string |

Each boolean function returns whether the runtime value matches the check. `WTF` returns the runtime type string (lowercased) using `Object.prototype.toString.call(value)` for highest accuracy.

Best practices 🌟

- Use these helpers as runtime guards before performing operations that assume a certain shape or type.
- In TypeScript projects you can combine these runtime checks with type narrowing patterns — consider updating the helpers to return type predicates (value is T) for even tighter integration.

Contributing & Support 💬

Contributions, issues and feature requests are welcome. Please open an issue or a PR.

License

MIT
