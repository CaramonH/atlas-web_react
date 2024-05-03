const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, '../dist'), // Output directory
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'), // Serve static files from the dist directory
    },
    compress: true,
    hot: true,
  },
  devtool: 'inline-source-map', // Generate source maps for better debugging
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match js and jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel for transpiling
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
};
