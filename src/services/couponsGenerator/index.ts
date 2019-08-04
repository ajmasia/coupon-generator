import { getLargestNum, padNumber } from '../../utils'

class Coupon {
  // Properties
  private amount: number = 5
  private long: number = 5

  public generate(initValue: number): string[] {
    const macNumber = getLargestNum(this.long)

    if (initValue > macNumber - this.amount + 1) {
      return ['Error: Initial value It is higher than allowed']
    }

    const result: string[] = Array.from(Array(this.amount), (x, index) => {
      const num: number = index + initValue

      return padNumber(num.toString(), this.long)
    })

    return result
  }
}

export default new Coupon()
