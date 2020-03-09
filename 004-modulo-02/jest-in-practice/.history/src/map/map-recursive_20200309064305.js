'use strict'


const map = (array = [], func = item => item) => {
  let counter = 0

  const mapInternal = (arrayInternal) => {
    if (arrayInternal.length === 0) return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter++)].concat(map(tail, func))
  }

  return mapInternal(array)
}

export default map