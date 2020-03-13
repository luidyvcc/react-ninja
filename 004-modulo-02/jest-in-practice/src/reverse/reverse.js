'use strict'

const some = (arr) => {
  let newArr = []
  for (let i = arr.length; i--;) newArr.push(arr[i])
  return newArr
}

export default some