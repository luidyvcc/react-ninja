'use strict'

const map = (array = [], func = item => item) => {
  if (array.length === 0) return []
  if (typeof func !== 'function') throw new TypeError('func is not a function')
  
  let newArray = []

  return map(newArray.push(func(array[0])), func);

}

export default map