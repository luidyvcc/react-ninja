'use strict'

const some = (arr) => {
  let newArr = []
  for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  console.log(newArr);
  return newArr
}

export default some