'use strict'

const filter = (array = [], func = item => item) => {
  return (function filterInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    const ret = func(head, counter, array) ? [head] : []
    return arrayInternal.length === 0 ? [] : [...ret, ...filterInternal(tail, counter + 1)]
  })(array, 0)
}

export default filter