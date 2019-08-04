import serviceConfig from './config'
import algorithms from './utils/Algorithm'

class Coupon {
  // Properties
  private amount: number = serviceConfig.amount
  private digits: number = serviceConfig.digits
  private initialValue: number = serviceConfig.initialValue
  private algorithm: string = serviceConfig.algorithm

  public generate(): string[] {
    switch (this.algorithm) {
      case 'secuential':
        return algorithms.secuential(
          this.initialValue,
          this.digits,
          this.amount
        )
      default:
        return algorithms.secuential(
          this.initialValue,
          this.digits,
          this.amount
        )
    }
  }
}

export default new Coupon()
