const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
	entry: './index.js',
	
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	
	plugins:[
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
	],

	publicPath: '/',
	
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options:{
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/i,                                                                                                                                                             
				use: ["style-loader", "css-loader"],                                                                                                                          
			},

			{
				test: /\.(jpg|jpeg|gif|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: 'images',
						outputPath: 'images',
					}
				}
			},

			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: 'fonts',
						outputPath: 'fonts',
					}
				}
			 },
		]
	}
	
}