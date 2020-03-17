'use strict'

const map = (arr = [], func = (item) => item, acc = null) => {
  let newAcc = acc;
  for (let i = 0; i < arr.length; i++) newAcc = func(newAcc, arr[i])
  return newAcc
}

export default map
