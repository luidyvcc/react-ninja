'use strict'

const map = (arr, func, initialValue) => {
  const acc = initialValue === undefined ? arr[0] : initialValue
  const arrCopy = initialValue === undefined ? arr.slice(1) : arr

  return (function reducerInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal;

    return arrInternal.length === 0
      ? accInternal
      : reducerInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)
  })(acc, arrCopy, 0);
}

export default map
