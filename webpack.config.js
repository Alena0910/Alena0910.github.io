const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
	entry: './index.tsx',
	
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	
	plugins:[
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
	],
	
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options:{
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
					}
				},
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
	},
	
    resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
	  },
	
}