import { getHighestNumOf, padNumber } from '../../../utils'
import { IAlgorithm } from '../models/interfaces'

class Secuential implements IAlgorithm {
  public getCodes(config: any): string[] {
    const { amount = 5, digits = 5, startWith = 1 } = config
    const maxNumber = getHighestNumOf(digits)

    if (startWith > maxNumber - amount + 1) {
      return ['Error: Initial value it is higher than allowed']
    }

    const result: string[] = Array.from(Array(amount), (x, index) => {
      const code: number = index + startWith
      return padNumber(code.toString(), digits)
    })
    console.log('RESULT', result)
    return result
  }
}

export default Secuential
