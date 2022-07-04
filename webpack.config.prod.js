// webpack.config.prod.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	mode: 'production',
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
