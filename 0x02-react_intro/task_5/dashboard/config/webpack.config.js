const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module:{
      rules:[
          {
        test: /\.js|\.jsx$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env", "@babel/react"]
            }
        },

        exclude: /node_modules/
    }]
    },
    devtool: 'inline-source-map',
    devServer: {
		contentBase: path.resolve('dist'),
		compress: true,
		port: 8564,
		hot: true,
		writeToDisk: true,
		historyApiFallback: true,

		publicPath: './',
		
	},
};