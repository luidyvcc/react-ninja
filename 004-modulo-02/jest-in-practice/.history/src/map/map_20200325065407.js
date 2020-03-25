'use strict'

const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr)) throw new TypeError('The first parameter must be an array')
  let newArr = []
  for (let i = 0; i < arr.length; i++) newArr.push(func(arr[i], i, arr))
  return newArr
}

export default map
