'use strict'

const reverse = arr => {
  return arr.length === 0 ? [] : [arr[arr.length - 1]].push(reverse(arr.slice(0, -1)))
}

export default reverse
