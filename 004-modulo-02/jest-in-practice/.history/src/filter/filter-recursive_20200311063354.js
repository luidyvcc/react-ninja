'use strict'

const filter = (array, func) => {
  return (function filterInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    const ret = func(head, counter, array) ? [head] : []
    return arrayInternal.length === 0 ? [] : [...ret, ...filterInternal(tail, counter + 1)]
  })(array, 0)
}

// const filter = (arr, func) => {
//   return (function filterInternal(arrayInternal, counter) {
//     const [head, ...tail] = arrayInternal
//     return arrayInternal.length === 0
//       ? []
//       : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
//   })(arr, 0)
// }

export default filter