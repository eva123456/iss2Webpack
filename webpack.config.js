'use strict'

const path = require('path');
const js_dir = path.resolve(__dirname, 'js');
const build_dir = path.resolve(__dirname, 'dist');

module.exports = {
	entry: path.resolve(js_dir, 'main.js'),
	output: {
		path: build_dir,
		filename: 'bundle.js'
	},
        module: {
                rules: [{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['latest'],
					plugins: ["transform-strict-mode"]
				}
			},]
        	},
	resolve: {
   		 extensions: [".js"]
		 },
};
