'use strict'

import mainReduce from './main-reducer-recursive'
import reverse from '../reverse/reverse-recursive'

const reduce = (arr, ...params) => mainReduce(reverse(arr, ...params))

export default reduce
