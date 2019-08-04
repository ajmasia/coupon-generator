import { padNumber } from '../../utils'

class Coupon {
  // Properties
  private amount: number = 5

  constructor() {
    // TODO: Read generator config from file
  }

  public generate(initValue: number): string[] {
    const result: string[] = Array.from(Array(this.amount), (x, index) => {
      const num: number = index + initValue

      return padNumber(num.toString(), 5)
    })

    return result
  }
}

export default new Coupon()
