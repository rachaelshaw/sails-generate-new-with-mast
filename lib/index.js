var path = require('path');
var _ = require('lodash');
var packageJSON = require('../json/package.json.js');
var sailsrc = require('../json/sailsrc');



/**
 * sails-generate-new-with-mast
 *
 * Usage:
 * `sails new foo`
 *
 * @type {Object}
 */

module.exports = {

	moduleDir: require('path').resolve(__dirname, '..'),

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	after: require('./after'),

	targets: {

		// '.': ['backend'],

		'./assets': { folder: {} },
		'./assets/favicon.ico': { copy: 'assets/favicon.ico' },
		'./assets/robots.txt': { template: 'assets/robots.txt' },
		'./assets/images': { folder: {} },
		'./assets/linker': { folder: {} },
		'./assets/linker/js': { folder: {} },
		'./assets/linker/js/dependencies/jquery.js': { copy: 'assets/linker/js/dependencies/jquery.js' },
		'./assets/linker/js/dependencies/lodash.js': { copy: 'assets/linker/js/dependencies/lodash.js' },
		'./assets/linker/js/dependencies/backbone.js': { copy: 'assets/linker/js/dependencies/backbone.js' },
		'./assets/linker/js/dependencies/mast.min.js': { copy: 'assets/linker/js/dependencies/mast.min.js' },
		'./assets/linker/js/dependencies/nameframework.js': { copy: 'assets/linker/js/dependencies/nameframework.js' },
		'./assets/linker/js/example.js': { template: 'assets/linker/js/example.js' },
		'./assets/linker/js/sails.io.js': { template: 'assets/linker/js/sails.io.js' },
		'./assets/linker/js/socket.io.js': { template: 'assets/linker/js/socket.io.js' },
		'./assets/linker/styles': { folder: {} },
		'./assets/linker/templates': { folder: {} },

		'./assets/index.html': { copy: 'assets/index.html' },
		'./assets/linker/js/components': { folder: {} },
		'./assets/linker/js/components/App.js': { template: 'assets/linker/js/components/App.js' },
		'./assets/linker/js/templates/App.html': { template: 'assets/linker/js/templates/App.html' },

		'./Gruntfile.js': { copy: './Gruntfile.js' },
		'./.gitignore': { copy: 'gitignore' },
		'./README.md': { template: './README.md' },
		'./package.json': { jsonfile: packageJSON },
		'./.sailsrc': { jsonfile: sailsrc },
		'./app.js': { copy: 'app.js' }
	}
};


