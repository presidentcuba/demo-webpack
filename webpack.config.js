const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'test.js',
	},
	module: {
		rules: [
			{
				test: /\.(tsx|js|ts)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},

			// {
			// 	test: /\.css$/,
			// 	use: ['style-loader', 'css-loader'],
			// },
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
