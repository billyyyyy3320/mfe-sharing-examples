const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Loaders and rules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  // Plugins
  plugins: [
    new ModuleFederationPlugin({
      name: 'host-app',
      remotes: {
        MicroFrontend1: 'MicroFrontend1@http://localhost:3001/remoteEntry.js',
        MicroFrontend2: 'MicroFrontend2@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        'react': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
};
