'use strict'

const every = (arr, func) => {
  return (function everyInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0
      ? true : func(head, counter, arr)
        ? everyInternal(tail, counter + 1) : false
  })(arr, 0)
}
export default every