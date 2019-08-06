import { getHighestNumOf, padNumber } from '../../../utils'
import { IAlgorithm } from '../models/interfaces'

class Secuential implements IAlgorithm {
  public getCodes(config: any): string[] {
    const maxNumber = getHighestNumOf(config.digits)

    if (config.initValue > maxNumber - config.amount + 1) {
      return ['Error: Initial value it is higher than allowed']
    }

    const result: string[] = Array.from(Array(config.amount), (x, index) => {
      const code: number = index + config.startWith
      return padNumber(code.toString(), config.digits)
    })
    console.log('RESULT', result);
    return result
  }
}

export default Secuential
