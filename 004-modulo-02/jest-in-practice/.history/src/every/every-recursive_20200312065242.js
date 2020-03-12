'use strict'

const every = (arr, func) => {
  return (function everyInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0
      ? true : func(head, counter, array)
        ? everyInternal(tail, counter + 1) : false
  })(array, 0)
}
export default every