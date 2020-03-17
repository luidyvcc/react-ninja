'use strict'

const map = (arr = [], func = (item) => item, acc = null) => {
  let newAcc = acc === undefined ? arr[0] : acc;
  const arrCopy = acc === undefined ? arr.slice(1) : arr;
  for (let i = 0; i < arrCopy.length; i++) newAcc = func(newAcc, arrCopy[i])
  return newAcc
}

export default map
