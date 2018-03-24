# ensure-date-fns-supports-locale

> Library helps you to be sure that passed locale(s) supported by [date-fns](https://date-fns.org) library

### Install

```bash
npm install ensure-date-fns-supports-locale --save
```
or
```bash
yarn add ensure-date-fns-supports-locale
```

### Usage

```js
const ensureLocale = require('ensure-date-fns-supports-locale');

// check single locale
const ensureIsRussianSupported = ensureLocale('ru'); // true
const ensureIsElvenSupported = ensureLocale('elv'); // false

// check array of locales
const ensureLocalesSupported = ensureLocale(['ru', 'en', 'eo']); // true
const ensureLocalesSupported = ensureLocale(['zzz', 'en', 'eo']); // false
```

### Tests

```bash
npm test
```