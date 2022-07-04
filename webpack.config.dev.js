// webpack.config.prod.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	mode: 'development', // 配置打包模式
	devtool: 'inline-source-map', // source-map
	devServer: {
		// devServer
		static: './dist',
	},
	plugins: [new HtmlWebpackPlugin({ title: 'HELLO' })],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		environment: { arrowFunction: false },
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', ['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
		],
	},
};
