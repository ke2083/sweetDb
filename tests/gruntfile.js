module.exports = function(grunt){

grunt.initConfig({
  uglify:{
  	build:{
  		files:{
  			'bootstrapper.js': [
            'bower_components/underscore/underscore.js',
            'bower_components/should/should.js',
            'bower_components/mocha/mocha.js',
            'bower_components/requirejs/require.js'
  			]
  		}
  	}
  }
});


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('build', ['uglify']);

};