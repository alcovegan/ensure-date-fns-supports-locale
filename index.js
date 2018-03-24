const supportedLocales = require('./supported-locales');

function ensure(locales) {
    if(Array.isArray(locales)) {
        return locales.every(locale => supportedLocales.indexOf(locale) !== -1)
    }
    return supportedLocales.indexOf(locales) !== -1
}

module.exports = ensure;