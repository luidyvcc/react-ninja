'use strict'

let counter = 0

const map = (array = [], func = item => item) => {
  const mapInternal (array) => {
    if (array.length === 0) {
      counter = 0
      return []
    }

    const [head, ...tail] = array
    return [func(head, counter++)].concat(map(tail, func))
  }

  return mapInternal(array)
}

export default map