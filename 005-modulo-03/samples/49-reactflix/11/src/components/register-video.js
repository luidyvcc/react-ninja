'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from '../redux-flow/reducers/videos/action-creators'

const RegisterVideo = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>

    <label htmlFor='id'>ID do vídeo:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Título do vídeo:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>

    <ButtonCLose type='button'>&times;</ButtonCLose>
  </Form>
)

const Form = styled.form`
  padding: 10px;
  position: relative;
`
const ButtonCLose = styled.button`
  border-radius: 50%;
  font-size: 20px;
  height: 30px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()
    const id = e.target.id.value
    const title = e.target.title.value
    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
