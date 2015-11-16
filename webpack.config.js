var webpack = require('webpack')

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'mutil.min.js',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
}