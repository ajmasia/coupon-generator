import { getHighestNumOf, padNumber } from '../../../utils'
import { IAlgorithm } from '../models/interfaces'

class Secuential implements IAlgorithm {
  public getCodes(digits: number, amount: number, initValue: number): string[] {
    const maxNumber = getHighestNumOf(digits)

    if (initValue > maxNumber - amount + 1) {
      return ['Error: Initial value it is higher than allowed']
    }

    const result: string[] = Array.from(Array(amount), (x, index) => {
      const code: number = index + initValue

      return padNumber(code.toString(), digits)
    })

    return result
  }
}

export default Secuential
