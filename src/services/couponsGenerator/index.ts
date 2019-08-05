import serviceConfig from './config'
import { IAlgorithms, IConfig } from './models/interfaces'
import algorithms from './utils/Algorithm'

class Coupon {
  // Properties
  private amount: number
  private digits: number
  private startWith: number
  private pattern: string
  private algorithm: string
  private useAalgorithm: IAlgorithms

  constructor(config: IConfig) {
    const { amount, digits, startWith, algorithm, pattern: pattern } = config

    this.amount = amount || 5
    this.digits = digits || 5
    this.startWith = startWith || 1
    this.pattern = pattern || '#A'
    this.algorithm = algorithm
    this.useAalgorithm = algorithms
  }

  public generate(): string[] {
    switch (this.algorithm) {
      case 'secuential':
        return this.useAalgorithm.secuential(
          this.startWith,
          this.digits,
          this.amount
        )
      case 'alphanumeric':
        return this.useAalgorithm.alphanumeric(
          this.digits,
          this.amount,
          this.pattern
        )
      default:
        return this.useAalgorithm.secuential(
          this.startWith,
          this.digits,
          this.amount
        )
    }
  }
}

export default new Coupon(serviceConfig)
