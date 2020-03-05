'use strict'

const map = (array, func) => {
  return array.map(item => func(item))
}

export default map