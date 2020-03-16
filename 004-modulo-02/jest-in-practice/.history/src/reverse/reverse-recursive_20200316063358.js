'use strict'

const reverse = (arr, func) => {
  return (function reverseInternal(arrayInternal) {
    const [...head, tail] = arrayInternal
    return arrayInternal.length === 0
      ? arrayInternal.push(tail) : reverseInternal(head);
  })(arr, 0)
}
export default reverse
