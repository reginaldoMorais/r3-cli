const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const srcPath = path.resolve(__dirname, 'source');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
  new ExtractTextPlugin('main.css'),
  new HTMLWebpackPlugin({
    title: 'Title',
    template: path.resolve(__dirname, 'source/client/index.ejs'),
  }),
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

const setPlugins = () => {
  if (process.env.NODE_ENV === 'analyse') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (process.env.NODE_ENV === 'production') {
    plugins.push(new UglifyJsPlugin());
  }

  if (process.env.NODE_ENV !== 'development') {
    plugins.push(new ProgressBarPlugin());
  }

  return plugins;
};

const setMode = () => {
  if (process.env.NODE_ENV === 'staging') {
    return 'none';
  }
  return process.env.NODE_ENV;
};

module.exports = {
  context: srcPath,

  target: 'web',

  mode: setMode(),

  entry: {
    client: `${srcPath}/client/index.js`,
    vendor: [
      'prop-types',
      'react',
      'react-burger-menu',
      'react-dom',
      'react-redux',
      'react-redux-toastr',
      'react-router-dom',
      'react-table',
      'reactstrap',
      'redux',
      'redux-burger-menu',
      'redux-form',
      'redux-multi',
      'redux-persist',
      'redux-promise',
      'redux-thunk',
    ],
  },

  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/assets/',
  },

  devServer: {
    port: 8081,
    contentBase: './source/client',
    historyApiFallback: true,
  },

  resolve: {
    modules: ['node_modules', 'source'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(ico)$/i,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.woff|.woff2|.ttf|.eot*.*$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },

  plugins: setPlugins(),

  optimization: {
    splitChunks: {
      name: 'vendor',
    },
    minimize: false,
  },

  devtool: 'source-map',
};
