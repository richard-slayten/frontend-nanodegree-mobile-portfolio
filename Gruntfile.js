module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
    build: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      }
     },
htmlmin: {                                      
    src: {                                       
      options: {                                
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                    
        'index.html': 'src/index.html'    
      }
    }
  }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Default task(s).
  grunt.registerTask('default', ['uglify','htmlmin']);
};