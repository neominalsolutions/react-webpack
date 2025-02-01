const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx', // entry file boostrap application directory
	output: {
		filename: 'index.js', // output file
		path: path.resolve(__dirname, 'build'), // output directory
	},
	devServer: {
		historyApiFallback: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/i, // file extension to look for
				exclude: /node_modules/, // folder to exclude
				use: {
					loader: 'babel-loader', // loader which should be used
				}, // transform ES6 to ES5
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })], // array of plugins to apply
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'], // extensions to resolve
	},
};
