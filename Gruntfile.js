module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({

        concat: {
            plugins: {
                src: [
                    'src/js/lib/*.js',
                    'node_modules/foundation-sites/dist/js/foundation.min.js',
                    'node_modules/slick-carousel/slick/slick.min.js'
                ],
                dest: 'js/libraries.js'
            },
            app: {
                src: ['src/js/*.js'],
                dest: 'js/app.js'
            }
        },

        sass: {
            options: {
                sourceMap: true,
                omitSourceMapUrl: false,
                outputStyle: "compressed",
                includePaths: ['node_modules/foundation-sites/scss','node_modules/slick-carousel/slick']
            },
            dist: {
                sourceMap: true,
                files: {
                    'css/styles.css': 'src/scss/app.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'last 2 versions', 'ie >= 9', 'and_chr >= 2.3'
                ],
                map: true
            },
            your_target: {
                src: ['css/app.css'],
                dest: 'css/app.css'
            }
        },

        mustache_render: {
            index: {
                options: {
                    template: 'src/html/index.mustache'
                },
                files: {
                    'index.html': 'src/config/index.json'
                }
            },
            portfolio: {
                options: {
                    template: 'src/html/portfolio_item.mustache'
                },
                files: {
                    'portfolio/rockstar.html': 'src/config/portfolio/rockstar.json',
                    'portfolio/realty.html': 'src/config/portfolio/realty.json',
                    'portfolio/paintballer.html': 'src/config/portfolio/paintballer.json',
                    'portfolio/klipsch.html': 'src/config/portfolio/klipsch.json',
                    'portfolio/napa.html': 'src/config/portfolio/napa.json',
                    'portfolio/radio.html': 'src/config/portfolio/radio.json',
                    'portfolio/cityscape.html': 'src/config/portfolio/cityscape.json',
                    'portfolio/generic.html': 'src/config/portfolio/generic.json',
                    'portfolio/gicc.html': 'src/config/portfolio/gicc.json',
                    'portfolio/speedloader.html': 'src/config/portfolio/speedloader.json',
                    'portfolio/macl.html': 'src/config/portfolio/macl.json',
                    'portfolio/cityway.html': 'src/config/portfolio/cityway.json',
                    'portfolio/audiobit_xchange.html': 'src/config/portfolio/audiobit_xchange.json',
                    'portfolio/triphase.html': 'src/config/portfolio/triphase.json'
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
            javascript: {
                files: [
                    'src/js/**/*.js'
                ],
                tasks: ['concat']
            },
            html: {
                files: ['src/**/*.mustache', 'src/config/**/*.json'],
                tasks: ['mustache_render']
            },
            options: {
                spawn: false,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'sass', 'autoprefixer', 'mustache_render', 'watch']);

    grunt.registerTask('build', ['concat', 'sass', 'autoprefixer']);
};