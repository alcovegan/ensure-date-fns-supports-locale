const supportedLocales = require('./supported-locales');

function ensure(locales) {
    if(Array.isArray(locales)) {
        return supportedLocales.every(locale => supportedLocales.indexOf(locale) !== -1)
    }
    return supportedLocales.indexOf(locales) !== -1
}

module.exports = ensure;