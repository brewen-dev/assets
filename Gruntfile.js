'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      all: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*'],
            dest: 'dist/lib/'
          },
          {
            src: [
              'package.json',
              'README.md',
              'LICENSE'
            ],
            dest: 'dist/'
          }
        ]
      }
    },
    clean: {
      dist: ['dist']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean', 'copy']);
};
