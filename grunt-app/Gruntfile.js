'use strict'

module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );

	grunt.initConfig( {
		jshint: {
			options: {
				"node": true;
				"indent": 2;
				// move to jsintrc: '.jsintrc'
			},
			all: [
				'Gruntfile.js',

			]
		}
	} );
}
