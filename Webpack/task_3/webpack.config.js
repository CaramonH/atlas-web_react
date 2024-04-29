const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js', // Entry point for header module
    body: './modules/body/body.js', // Entry point for body module
    footer: './modules/footer/footer.js', // Entry point for footer module
  },

  output: {
    filename: '[name].bundle.js', // Generates separate bundles for each entry point
    path: path.resolve(__dirname, 'public'), // Specifies the output directory
  },

  devServer: {
    contentBase: './public', // Serves content from the public directory
    compress: true, // Enables gzip compression
    hot: true, // Enables hot module replacement
    port: 8564, // Specifies the port number
  },

  plugins: [
    new HtmlWebpackPlugin({ // Generates an HTML file for you
      title: 'task_3', // Sets the title of the generated HTML file
    }),
    new CleanWebpackPlugin(), // Cleans the output.path directory before each build
  ],

  devtool: 'inline-source-map', // Generates source maps for easier debugging

  optimization: {
    splitChunks: {
      chunks: 'all', // Applies splitting logic to all chunks, including async and non-async chunks
      cacheGroups: { // Allows you to define groups of modules that should be bundled together
        vendors: { // Creates a cache group for modules in 'node_modules' (e.g., jQuery)
          test: /[\\/]node_modules[\\/]/, // Specifies which modules to include in this group (anything in node_modules)
          name: 'vendors', // Specifies the name of the output chunk file
          chunks: 'all',
        }
      }
    }
  },

  mode: 'development', // Sets the mode to development

  module: {
    rules: [
      {
        test: /\.css$/, // Regex to match CSS files
        use: [
          'style-loader', // Injects CSS into the DOM using <style> tags
          'css-loader', // Resolves @import and url() in CSS files
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Regex to match image files
        use: [
          'file-loader', // Handles file loading
          {
            loader: 'image-webpack-loader', // Optimize images
          },
        ],
      },
    ],
  },
};
