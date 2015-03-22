module.exports = function (grunt) {
    grunt.initConfig({
        jasmine: {
            testall: {
                src: 'src/**/*.js',
                options: {
                    specs: 'specs/*_spec.js',
                    helpers: 'specs/*_helper.js',
                    keeprunner: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888
                }
            }
        },

        watch: {
            scripts: {
                files: ['specs/*_spec.js', 'specs/*_helper.js', 'src/**/*.js'],
                tasks: ['jasmine:testall'],
                options: {
                    spawn: false
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'jasmine');
};

