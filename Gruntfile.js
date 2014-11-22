/*jshint indent:2*/
/*globals module:false */
// Generated on 2013-05-01 using generator-webapp 0.1.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ['last 2 version', '> 1%', 'ie 8', 'ie 7']
      },
      dev: {
        files: {
          'content/styles/styles.css': 'src/styles/styles_noprefixes.css'
        },
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: ''
        }
      }
    },        
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['src/sass/*.{scss,sass}', 'src/sass/**/*.{scss,sass}'],
        tasks: ['compass:dev', 'autoprefixer:dev'],
        options: {
          livereload: false,
        },
      },
      scripts: {
        files: ['*.js'],
      },
      css: {
        files: ['src/styles/*.css'],
      },
      html: {
        files: ['*.html']
      }
    },
    compass: {
      options: {
        relativeAssets: true,
      },
      dev: {
        options: {
          debugInfo: false,
          sassDir: 'src/sass',
          cssDir: 'src/styles',
          imagesDir: 'src/styles',
          javascriptsDir: 'src/scripts',
          fontsDir: 'src/styles/fonts',
          config: 'config_dev.rb',
          outputStyle: 'expanded', 
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['connect:server', 'watch']);
};
