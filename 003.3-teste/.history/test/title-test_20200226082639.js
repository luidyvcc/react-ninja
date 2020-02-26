'use strict'

const ReactDOMServer = require('react-dom/server')
const Title = require('./title')

console.log(ReactDOMServer.renderToStaticMarkup(Title))