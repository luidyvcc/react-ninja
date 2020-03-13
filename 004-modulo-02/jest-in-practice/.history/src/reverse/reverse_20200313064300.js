'use strict'

const some = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let [...start, end] = arr
    newArr.push(end)
  }
  return newArr
}

export default some