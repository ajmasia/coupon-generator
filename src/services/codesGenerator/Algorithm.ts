import { IAlgorithm } from './models/interfaces'

class Algorithm {
  public name: string
  public algorithm: IAlgorithm

  constructor(name: string, algorithm: IAlgorithm) {
    this.name = name
    this.algorithm = algorithm
  }

  public generate(arg1: number, arg2: number, arg3: any): any {
    return this.algorithm.getCodes(arg1, arg2, arg3)
  }
}

export default Algorithm
