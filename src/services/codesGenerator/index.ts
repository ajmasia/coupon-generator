import Algorithm from './Algorithm'
import * as algorithms from './algorithms'
import serviceConfig from './config'

const { algorithm, config } = serviceConfig

const codes = new Algorithm(new algorithms.alphanumeric())
const result = codes.generate(config)

export default result

// class AlgorithmManager {
//     public codes: any

//     contructor(serviceConfig: any) {
//         this.codes = new Algorithm(new algorithms.alphanumeric())
//     }
// }

// export default new AlgorithmManager()
