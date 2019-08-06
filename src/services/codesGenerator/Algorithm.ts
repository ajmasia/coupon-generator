import { IAlgorithm } from './models/interfaces'

class Algorithm {
  public algorithm: IAlgorithm

  constructor(algorithm: IAlgorithm) {
    this.algorithm = algorithm
  }

  public generate(arg: object): any {
    return this.algorithm.getCodes(arg)
  }
}

export default Algorithm
