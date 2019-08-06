import Algorithm from './Algorithm'
import * as algorithms from './algorithms'
import serviceConfig from './config'

const { amount, digits, startWith, algorithm, pattern } = serviceConfig

const codes = new Algorithm('secuential', new algorithms.alphanumeric())
const result = codes.generate(digits, amount, pattern)
export default result
