'use strict'

let counter = 0

const map = (array = [], func = item => item) => {
  const mapInternal = (arrayInternal) => {
    if (arrayInternal.length === 0) {
      counter = 0
      return []
    }

    const [head, ...tail] = arrayInternal
    return [func(head, counter++)].concat(map(tail, func))
  }

  return mapInternal(array)
}

export default map