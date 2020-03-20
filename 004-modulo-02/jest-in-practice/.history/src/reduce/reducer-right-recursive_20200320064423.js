'use strict'

import mainReduce from './main-reducer-recursive'
import reverse from '../reverse/reverse-recursive'

const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRight
