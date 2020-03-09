'use strict'

const map = (array = [], func = item => item) => {
  const counter = 0

  return (function mapInternal(arrayInternal, counter) {
    if (arrayInternal.length === 0) return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter, array)].concat(mapInternal(tail, counter+1))
  })(array, counter)
}

export default map