'use strict'

const map = (arr, func, initialValue) => {
  let acc = initialValue
  let arrCopy = arr
  if (initialValue === undefined) {
    acc = arr[0];
    arrCopy = arr.slice(1);
  }


  // for (let i = 0; i < arrCopy.length; i++) newAcc = func(newAcc, arrCopy[i], i, arrCopy)
  // return newAcc

  return (function reducerInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal;

    return arrInternal.length === 0
      ? accInternal
      : func(accInternal, head, counter, arrCopy)
  })(acc, arrCopy, 0);
}

export default map
