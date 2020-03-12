'use strict'

const some = (arr, func) => {
  for (let i = 0; i < arr.length; i++) if (!func(arr[i], i, arr)) return false
  return true
}

export default some