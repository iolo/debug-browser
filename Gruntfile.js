module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        devel: true,
        browser: true,
        '-W030': true,//Expected an assignment or function call and instead saw an expression.
        '-W097': true,//Use the function form of "use strict".
        globals: {
        }
      },
      all: ['debug.js']
    },
    qunit: {
      all: ['tests/**/*_test.html']
    },
    uglify: {
      options: {
        banner: '/*! <%=pkg.name%> <%=pkg.version%> (build at ' + (new Date()) + ') */\n'
      },
      app: {
        files: {
          'debug.min.js': ['debug.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('build', ['jshint', 'uglify']);
};
