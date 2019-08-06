import Algorithm from './Algorithm'
import * as Algorithms from './algorithms'
import serviceConfig from './config'

const { algorithm, config } = serviceConfig
const useAlgoritm = new Algorithms[algorithm]()

const codes = new Algorithm(useAlgoritm)
const result = codes.generate(config)

export default result

// class AlgorithmManager {
//     public codes: any

//     contructor(serviceConfig: any) {
//         this.codes = new Algorithm(new algorithms.alphanumeric())
//     }
// }

// export default new AlgorithmManager()
