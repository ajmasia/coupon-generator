import serviceConfig from './config'
import algorithm from './utils/secuential'

class Coupon {
  // Properties
  private amount: number = serviceConfig.amount
  private long: number = serviceConfig.long
  private algorithm: string = serviceConfig.algorithm

  public generate(initValue: number): string[] {
    switch (this.algorithm) {
      case 'secuential':
        return algorithm.secuential(initValue, this.long, this.amount)
      default:
        return algorithm.secuential(initValue, this.long, this.amount)
    }
  }
}

export default new Coupon()
