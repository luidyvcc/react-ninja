'use strict'

const map = (array = [], func = item => item) => {
  return (function mapInternal(arrayInternal, counter) {
    if (arrayInternal.length === 0) return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter, array)].concat(mapInternal(tail, counter+1))
  })(array, 0)
}

export default map