'use strict'

import mainReduce from './main-reducer-recursive'
import reverse from '../reverse/reverse-recursive'

const reduceRight = (arr, ...params) => mainReduceRight(reverse(arr, ...params))

export default reduceRight
