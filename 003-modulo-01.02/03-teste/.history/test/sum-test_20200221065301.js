const sum = require('./sum')

console.assert(
  typeof sum ==='function',
  'Should sum is a function'
)

console.assert(
  sum(1, 2) === 3,
  'Should sum(1, 2) return 3'
)

console.log('All test passed!')