const ensureLocale = require("./");

// single string
const ensureIsRussianSupported = ensureLocale("ru"); // true
const ensureIsElvenSupported = ensureLocale("elv"); // false

// array
const ensureLocalesSupported = ensureLocale(["ru", "en", "eo"]); // true
const ensureLocalesSupportedOneMoreTime = ensureLocale(["zzz", "en", "eo"]); // false

console.log(ensureIsRussianSupported, ensureIsElvenSupported);

console.log(ensureLocalesSupported, ensureLocalesSupportedOneMoreTime);
