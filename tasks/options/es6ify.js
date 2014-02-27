module.exports = {
    deps: {
        files: {
            'tmp/es5/LoaderPolyfill.js': 'node_modules/js-loaders/Loader.js'
        }
    },
    lib: {
        files: [{
            expand: true,
            cwd: 'lib/',
            src: ['**/*.js'],
            dest: 'tmp/es5/'
        }]
    }
};
