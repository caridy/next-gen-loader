function config(name) {
    return require('./tasks/options/' + name);
}

module.exports = function(grunt) {
    var path = require('path');

    // Load node modules providing grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean:  config('clean'),
        copy:   config('copy'),
        es6ify: config('es6ify'),
        concat: config('concat'),
        uglify: config('uglify')
    });

    // Load local tasks.
    grunt.task.loadTasks('./tasks');
    grunt.registerTask('default', ['clean', 'copy', 'es6ify', 'concat', 'uglify']);
};
