'use strict'

const filter = (array = [], func = item => item) => {
  return (function filterInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    const ret = func(head, counter, array) ? [head, ...filterInternal(tail, counter + 1)] : [...filterInternal(tail, counter + 1)]
    return arrayInternal.length === 0 ? [] : ret
  })(array, 0)
}

export default filter