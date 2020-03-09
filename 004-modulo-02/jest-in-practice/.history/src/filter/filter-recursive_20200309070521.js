'use strict'

const filter = (array = [], func = item => item) => {
  return (function filterInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0 ? [] : [func(head, counter, array), ...filterInternal(tail, counter + 1)]
  })(array, 0)
}

export default filter