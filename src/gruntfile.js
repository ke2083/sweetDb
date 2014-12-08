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
		optimizeAllPluginResources: false,
		findNestedDependencies: true
      }

    }

  },
  copy:{
  	build:{
  		files:[
  		  {expand: false, src: ['../dist/*.js'], dest: '../demo/'}	
  		]
  	}
  }

});


grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.registerTask('build', ['requirejs', 'copy']);

};