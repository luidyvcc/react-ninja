'use strict'

import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.clearState = () => ({ id: v4(), value: '' })
    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = (value) => {
      if (this.state.isSaving) {
        const newFile = {
          title: 'Sem título',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: JSON.stringify(newFile)
          }
        })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)    
      // let files = Object.keys(this.state.files).reduce((acc, fileId) => {
      //   return fileId === this.state.id ? acc : {
      //     ...acc,
      //     [fileId]: this.state.files[fileId]
      //   }
      // }, {})
      // eslint-disable-next-line no-unused-vars
      const { [this.state.id]: id, ...files } = this.state.files
      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        value: this.state.files[fileId].content,
        id: fileId
      })
    }
  }

  componentDidMount () {
    const files = Object.keys(localStorage)
    this.setState({ files: files.filter(id => id !== 'tokenTMP' && id !== 'token').reduce((acc, fileId) => ({
      ...acc,
      [fileId]: JSON.parse(localStorage.getItem(fileId))
    }), {})})
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
      />
    )
  }
}

export default App
