'use strict'
import React from 'react'

const src = ({ children, handleClick }) => (
  <button className='main-button' onClick={() => handleClick()}>
    {children}
  </button>
)

export default src
