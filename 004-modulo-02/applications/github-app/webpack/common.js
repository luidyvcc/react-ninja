'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')

module.exports = validate({
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: {
    title: 'Github app',
    template: path.join(__dirname, 'src', 'html', 'template-dev.html')
  },

  standardPreLoaders: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard'
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel'
  },
  
  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: /src/,
    loaders: ['style', 'css']
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components')
    }
  }
})