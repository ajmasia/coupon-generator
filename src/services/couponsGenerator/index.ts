import serviceConfig from './config'
import { IAlgorithm } from './models/algorithms'
import algorithms from './utils/Algorithm'

const { amount, digits, initialValue, algorithm } = serviceConfig

class Coupon {
  // Properties
  private amount: number = amount
  private digits: number = digits
  private initialValue: number = initialValue
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
