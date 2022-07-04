const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

exports.baseRules = [
	{
		test: /\.less$/i,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: '[name]__[local]--[hash:base64:5]', // modules 展示类名
					},
				},
			},
			'postcss-loader',
			'less-loader',
		],
	},
	{
		test: /\.css$/i,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: '[name]__[local]--[hash:base64:5]', // modules 展示类名
					},
				},
			},
			'postcss-loader',
		],
		exclude: /node_modules/,
	},
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
				presets: ['@babel/preset-react', ['@babel/preset-env', { targets: 'defaults' }, 'astroturf/loader']],
			},
		},
	},
];

exports.basePlugins = [
	new HtmlWebpackPlugin({ template: __dirname + '/index.html' }),
	new webpack.DefinePlugin({
		'process.env': {
			CSS_MODULE: true, // shineout 支持 css modules
		},
	}),
];
