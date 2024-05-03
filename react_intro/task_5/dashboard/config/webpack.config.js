const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, '../dist'), // Output directory
  },
  devServer: {
    port: 8000,
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
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add babel presets
          },
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
        type: 'asset/resource', // Use asset modules to handle images
      },
    ],
  },
};
