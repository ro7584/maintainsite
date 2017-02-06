const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.js'
	],

	output: {
		path: `${__dirname}/dist`,
		filename: 'index_bundle.js',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
				},
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!less-loader',
			}
		],
	},

	devServer: {
		inline: true,
		port: 8008,
	},

	plugins: [HTMLWebpackPluginConfig],
}