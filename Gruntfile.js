module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({

        sass: {
            options: {
                sourceMap: true,
                omitSourceMapUrl: false,
                outputStyle: "compressed",
            },
            dist: {
                sourceMap: true,
                files: {
                    'build/css/styles.css': 'src/scss/app.scss'
                }
            }
        },

        copy: {
            img: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['img/**'],
                        dest: 'build/'
                    }
                ]
            },
        },

        autoprefixer: {
            options: {
                browsers: [
                    'last 2 versions', 'ie >= 9', 'and_chr >= 2.3'
                ],
                map: true
            },
            your_target: {
                src: ['build/css/app.css'],
                dest: 'build/css/app.css'
            }
        },

        mustache_render: {
            index: {
                options: {
                    template: 'src/html/index.mustache'
                },
                files: {
                    'build/index.html': 'src/config/index.json'
                }
            },
            portfolio: {
                options: {
                    template: 'src/html/portfolio_item.mustache'
                },
                files: {
                    'build/portfolio/rockstar.html': 'src/config/rockstar.json'
                }
            }
        },

        watch: {
            styles: {
                files: [
                    'src/scss/**/*.scss', 'src/scss/**/*.sass'
                ],
                tasks: ['sass', 'autoprefixer']
            },
            html: {
                files: ['src/html/**/*.mustache', 'src/config/**/*.json'],
                tasks: ['mustache_render']
            },
            img: {
                files: ['src/img'],
                tasts: ['copy']
            },
            options: {
                spawn: false,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['sass', 'copy', 'autoprefixer', 'mustache_render', 'watch']);

    grunt.registerTask('build', ['sass', 'copy', 'autoprefixer']);
};