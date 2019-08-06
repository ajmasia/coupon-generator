import Algorithm from './Algorithm'
import * as Algorithms from './algorithms'
import { IAlgorithm, IConfig } from './models/interfaces'

class Coupon {
  private selectedAlgorithm: IAlgorithm
  private config: any
  private algorithm: string
  private useAlgoritm: any

  constructor(serviceConfig: IConfig) {
    const { config, algorithm } = serviceConfig
    this.config = config
    this.algorithm = algorithm
    this.selectedAlgorithm = new Algorithms[this.algorithm]()
    this.useAlgoritm = new Algorithm(this.selectedAlgorithm)
  }
  public generate() {
    return this.useAlgoritm.generate(this.config)
  }
}

export default Coupon
