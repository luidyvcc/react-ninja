'use strict'

const map = (arr = [], func = (item) => item, acc = 0) => {
  let newAcc = acc;
  for (let i = 0; i < arr.length; i++) newAcc = func(acc, arr[i])
  return newAcc
}

export default map
