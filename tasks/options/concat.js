module.exports = {
    distLoader: {
        src: [
            'tmp/es5/LoaderPolyfill.js',
            'tmp/es5/yloader.js'
        ],
        dest: 'dist/loader.js'
    },
    distPromise: {
        src: [
            'tmp/es5/PromisePolyfill.js'
        ],
        dest: 'dist/promise.js'
    },
    distHarmony: {
        src: [
            'tmp/es5/HarmonyPolyfill.js',
            'tmp/es5/patches.js'
        ],
        dest: 'dist/harmony.js'
    }
};
