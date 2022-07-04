// webpack.config.prod.js
const path = require('path');
const { baseRules, basePlugins } = require('./webpack.config.base');

module.exports = {
	entry: './index.js',
	mode: 'production',
	plugins: [...basePlugins],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		environment: { arrowFunction: false },
	},
	module: {
		rules: [...baseRules],
	},
};
