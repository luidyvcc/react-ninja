'use strict'

const map = (arr = [], func = (item) => item, acc = 0) => {
  for (let i = 0; i < arr.length; i++) func(acc, arr[i])
  return acc
}

export default map
