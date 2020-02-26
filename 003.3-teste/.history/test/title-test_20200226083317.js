'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const $ = require9('whacko')
const Title = require('./title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
)

console.log($(TitleComponent).get(0))