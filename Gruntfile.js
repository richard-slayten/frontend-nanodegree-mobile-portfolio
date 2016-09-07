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
    },
    imagemin: {                          // Task
      static: {                          // Target
        options: {                       // Target options
          optimizationLevel: 7
        },
        files: {                         // Dictionary of files
          'views/images/pizza_min.png': 'views/images/pizza.png' , // 'destination': 'source'
          'views/images/pizzeria_min.jpg': 'views/images/pizzeria.jpg',
          'views/images/pizzeria_half_min.jpg': 'views/images/pizzeria_half.jpg',
          'views/images/pizzeria_100_min.jpg': 'views/images/pizzeria_100.jpg',
          'views/images/pizza_md_min.png': 'views/images/pizza_md.png',
          'views/images/pizza_bk_min.png': 'views/images/pizza_bk.png'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Default task(s).
  grunt.registerTask('default', ['uglify','htmlmin', 'imagemin']);
};