module.exports = {
    Promise: {
        src: 'node_modules/ypromise/promise.js',
        dest: 'tmp/es5/PromisePolyfill.js'
    },
    JSPolyfills: {
        src: 'node_modules/js-polyfills/harmony.js',
        dest: 'tmp/es5/HarmonyPolyfill.js'
    }
};
