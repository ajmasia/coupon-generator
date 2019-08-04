import getSecuentialCoupons from './utils/secuential'

class Coupon {
  // Properties
  private amount: number = 5
  private long: number = 5

  public generate(initValue: number): string[] {
    return getSecuentialCoupons(initValue, this.long, this.amount)
  }
}

export default new Coupon()
