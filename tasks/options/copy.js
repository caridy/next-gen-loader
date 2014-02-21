module.exports = {
    Promise: {
        src: 'node_modules/ypromise/promise.js',
        dest: 'tmp/es5/PromisePolyfill.js'
    },
    MapSetWeakMap: {
        src: 'node_modules/harmony-collections/harmony-collections.js',
        dest: 'tmp/es5/MapSetWeakMapPolyfill.js'
    }
};
