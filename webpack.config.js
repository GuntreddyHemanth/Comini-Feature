const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Add this line

module.exports = {
  entry: {
    popup: './src/popup.jsx', // Entry point for the popup
    background: './src/background.js', // Entry point for the background script
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: '[name].js', // Output file name ([name] will be replaced by the entry name)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/popup.html', // Use popup.html as a template
      filename: 'popup.html', // Output HTML file name
      chunks: ['popup'], // Include only the popup bundle
    }),
    new CopyWebpackPlugin({ // Add this plugin
      patterns: [
        {
          from: 'public/manifest.json', // Copy manifest.json from public folder
          to: path.resolve(__dirname, 'dist'), // Paste it in the dist folder
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx files
  },
  mode: 'development', // Set to 'production' for production builds
};