module.exports = function (grunt) {
  'use strict'

  require('time-grunt')(grunt)

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Optimization */

    imagemin: {
      dist: {
        options: {
          progressive: true,
          optimizationLevel: 4
        },

        files: [{
          expand: true,
          cwd: 'site/_assets/images/',
          src: ['**/*.{gif,jpg,png,ico,webp}'],
          dest: '.site/assets/images/'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeEmptyAttributes: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeRedundantAttributes: true
        },

        files: [{
          expand: true,
          cwd: '.site',
          src: '**/*.html',
          dest: '.site'
        }]
      }
    },

    cssmin: {
      dist: {
        files: {
          '.site/assets/css/main.css': '.site/assets/css/main.css'
        }
      }
    },

    uncss: {
      options: {
        htmlroot: '.site',
        ignoreSheets: [/fonts.googleapis.com/, /maxcdn.bootstrapcdn.com/]
      },

      dist: {
        files: {
          '.site/assets/css/main.css': ['.site/**/*.html']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '.site/assets/scripts/main.js': 'site/_assets/scripts/*.js'
        }
      }
    },

    /* Quality Control */

    csslint: {
      options: {
        csslintrc: '.config/csslintrc.json'
      },

      dist: {
        src: ['.site/assets/css/main.css']
      }
    },

    /* Build Tools */

    clean: {
      dist: ['.site/*']
    },

    copy: {
      fonts: {
        expand: true,
        cwd: './node_modules/bootstrap/fonts/',
        src: '**',
        dest: '.site/assets/fonts/',
        filter: 'isFile'
      }
    },

    less: {
      dist: {
        files: {
          '.site/assets/css/main.css': 'site/_assets/less/main.less'
        }
      }
    },

    csscomb: {
      options: {
        config: '.config/csscomb.json'
      },

      dist: {
        files: {
          '.site/assets/css/main.css': '.site/assets/css/main.css'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },

      dist: {
        src: ['.site/assets/css/*.css']
      }
    },

    jekyll: {
      options: {
        dest: '.site',
        config: 'jekyll.yml',
        bundleExec: true
      },

      draft: {
        options: {
          drafts: true
        }
      },

      dist: {
        options: {
          drafts: false
        }
      }
    },

    'gh-pages': {
      options: {
        base: '.site'
      },
      src: '**/*'
    },

    cloudflare: {
      options: {
        a: 'fpurge_ts',
        tkn: process.env.CLOUDFLARE_API_KEY,
        email: process.env.CLOUDFLARE_EMAIL,
        z: 'devconfig.org'
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },

      livereload: {
        options: {
          open: true,
          base: '.site'
        }
      }
    },

    watch: {
      images: {
        files: ['site/_assets/images/**/*.{gif,jpg,png,webp}'],
        tasks: ['imagemin']
      },

      less: {
        files: ['site/_assets/less/*.less'],
        tasks: ['less', 'autoprefixer', 'build-css']
      },

      js: {
        files: ['Gruntfile.js', 'site/_assets/scripts/*.js'],
        tasks: ['uglify']
      },

      jekyll: {
        files: ['**/*.yml', 'site/*/**/*.md', 'site/**/*.html', 'site/sitemap.*', '!**/node_modules/**'],
        tasks: ['jekyll:draft', 'htmlmin', 'build-css']
      },

      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },

        files: [
          '.site/**/*.html',
          '.site/assets/css/**/*.css',
          '.site/assets/scripts/**/*.js',
          '.site/assets/images/**/*.{gif,jpg,png,webp}'
        ]
      }
    }
  })

  /* Define Tasks */

  grunt.registerTask('check', [
    'csslint'
  ])

  grunt.registerTask('build-css', [
    'less',
    'uncss',
    'autoprefixer',
    'csscomb',
    'cssmin'
  ])

  grunt.registerTask('build', [
    'clean',
    'copy',
    'jekyll:dist',
    'build-css',
    'uglify',
    'imagemin',
    'htmlmin'
  ])

  grunt.registerTask('default', [
    'build',
    'check'
  ])

  grunt.registerTask('serve', [
    'default',
    'connect',
    'watch'
  ])

  grunt.registerTask('deploy', [
    'default',
    'gh-pages',
    'cloudflare'
  ])
}
