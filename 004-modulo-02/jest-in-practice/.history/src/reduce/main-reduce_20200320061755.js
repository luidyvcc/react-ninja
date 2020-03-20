'use strict'

const mainReduce = (arr, func, acc) => {
  let newAcc = acc
  let arrCopy = arr
  if (acc === undefined) {
    newAcc = arr[0];
    arrCopy = arr.slice(1);
  }
  for (let i = 0; i < arrCopy.length; i++) newAcc = func(newAcc, arrCopy[i], i, arrCopy)
  return newAcc
}

export default mainReduce
