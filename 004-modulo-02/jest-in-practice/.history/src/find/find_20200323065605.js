'use strict'

const find = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i]
  }
  return null
}

export default find
