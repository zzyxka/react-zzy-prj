// webpack.config.dev.js
const path = require('path');
const { baseRules, basePlugins } = require('./webpack.config.base');

module.exports = {
	entry: './index.js',
	mode: 'development', // 配置打包模式
	devtool: 'inline-source-map', // source-map
	devServer: {
		// devServer
		static: './dist',
	},
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
