module.exports = function(grunt){

grunt.initConfig({

  requirejs:{

    compile:{

      options:{
         baseUrl: './app',
         mainConfigFile: 'config.js',
         modules: [{ name: 'sweetdb'}],
         dir: '../dist',
		optimizeCss: 'standard',
		optimize: 'uglify2',
		generateSourceMaps: true,
		uglify2: {
			compress: {
				sequences: true
			},
			mangle: true
		},
		inlineText: true,
		removeCombined: true,
		preserveLicenseComments: false,
		optimizeAllPluginResources: true,
		findNestedDependencies: true
      }

    }

  },
  copy:{
  	build:{
  		expand: true,
  		cwd: '../',
		src: ['dist/*.js', 'dist/*.map'],
		dest: '../tests/',
		flatten: true,
		filter: 'isFile'
  	}
  },
  watch:{
     scripts: {
       files: ['**/*.js'],
       tasks: ['jshint','requirejs', 'copy'],
       options: {
         spawn: false,
       }
     }
  },
  jshint:{
  	src:['app/**/*.js'],
  	options:{
  		globals: {
  		   'console': false,
  		   'define': false,
  		   '_': false,
  		   'require': false
  	   }
  	}
  }
});


grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('build', ['jshint', 'requirejs', 'copy']);

};