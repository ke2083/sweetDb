module.exports = function(grunt){

grunt.initConfig({
  uglify:{
  	build:{
  		files:{
  			'bootstrapper.js': [
  			'bower_components/underscore/underscore.js', 
  			'bower_components/requirejs/require.js', 
  			'bower_components/jquery/dist/jquery.js'
  			]
  		}
  	}
  }
});


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('build', ['uglify']);

};