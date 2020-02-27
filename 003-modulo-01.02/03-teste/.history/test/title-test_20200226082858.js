'use strict'

const ReactDOMServer = require('react-dom/server')
const Title = require('./title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
)

console.log(TitleComponent)