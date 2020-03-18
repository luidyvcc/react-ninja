'use strict'

const map = (arr, func, initialValue) => {
  let acc = initialValue
  let arrCopy = arr

  if (initialValue === undefined) {
    acc = arr[0];
    arrCopy = arr.slice(1);
  }
  
  return (function reducerInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal;

    return arrInternal.length === 0
      ? accInternal
      : reducerInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)
  })(acc, arrCopy, 0);
}

export default map
