'use strict'

const map = (array, func) => array.map((item, index, array) => func(item, index, array))

export default map