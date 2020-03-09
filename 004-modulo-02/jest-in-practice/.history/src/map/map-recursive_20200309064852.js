'use strict'

const map = (array = [], func = item => item) => {
  let counter = 0

  return (arrayInternal => {
    if (arrayInternal.length === 0) return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter++, array)].concat(mapInternal(tail, func))
  })(array)
}

export default map