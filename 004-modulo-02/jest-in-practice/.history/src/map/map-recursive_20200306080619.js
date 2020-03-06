'use strict'

let counter = 0

const map = (array = [], func = item => item) => {
  if (array.length === 0) {
    counter = 0
    return []
  }

  const [head, ...tail] = array
  return [func(head, counter++)].concat(map(tail, func))
}

export default map