const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx', // entry file boostrap application directory
	output: {
		filename: 'index.js', // output file
		path: path.resolve(__dirname, 'build'), // output directory
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/, // file extension to look for
				exclude: /node_modules/, // folder to exclude
				use: {
					loader: 'babel-loader', // loader which should be used
				}, // transform ES6 to ES5
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })], // array of plugins to apply
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'], // extensions to resolve
	},
};
