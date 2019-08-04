import { getHighestNumOf, padNumber } from '../../../utils'

class Algorithm {
  public secuential(
    initValue: number,
    digits: number,
    amount: number
  ): string[] {
    const maxNumber = getHighestNumOf(digits)

    if (initValue > maxNumber - amount + 1) {
      return ['Error: Initial value it is higher than allowed']
    }

    const result: string[] = Array.from(Array(amount), (x, index) => {
      const num: number = index + initValue

      return padNumber(num.toString(), digits)
    })

    return result
  }
}

export default new Algorithm()
