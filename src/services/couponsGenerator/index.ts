import serviceConfig from './config'
import { IAlgorithm } from './models/algorithms'
import algorithms from './utils/Algorithm'

const { amount, digits, initialValue, algorithm, pattern } = serviceConfig

class Coupon {
  // Properties
  private amount: number = amount
  private digits: number = digits
  private initialValue: number = initialValue
  private pattern: string = pattern
  private algorithm: string = algorithm
  private useAalgorithm: IAlgorithm = algorithms

  public generate(): string[] {
    switch (this.algorithm) {
      case 'secuential':
        return this.useAalgorithm.secuential(
          this.initialValue,
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
          this.initialValue,
          this.digits,
          this.amount
        )
    }
  }
}

export default new Coupon()
