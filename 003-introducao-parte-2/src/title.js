'use strict'

import React from 'react'

const Title = ({ name, lastName }) => (
  <h1>Olá {`${name} ${lastName.middle} ${lastName.last}`}!</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: { middle: 'Sem', last: 'Sobrenome' }
}

export default Title
