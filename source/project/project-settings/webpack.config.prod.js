const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Modules: path.resolve(__dirname, 'node_modules'),
      Assets: path.resolve(__dirname, 'public'),
      Config: path.resolve(__dirname, 'config'),
      Templates: path.resolve(__dirname, 'source', 'views', 'templates'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('bundle.css'),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '.babelrc'),
        to: './',
      },
      {
        from: path.join(__dirname, 'client', 'index.html'),
        to: './',
      },
      {
        from: path.join(__dirname, 'server'),
        to: './server/',
      },
      {
        from: path.join(__dirname, 'config'),
        to: './config/',
      },
      {
        from: path.join(__dirname, 'package.json'),
        to: './',
      },
    ]),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ZipPlugin({
      path: path.join(__dirname, 'zip'),
      filename: 'application-runner.zip',
      fileOptions: {
        mtime: new Date(),
        mode: 0o100664,
        compress: true,
        forceZip64Format: false,
      },

      zipOptions: {
        forceZip64Format: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(ico)$/i,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.woff|.woff2|.ttf|.eot*.*$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
};
