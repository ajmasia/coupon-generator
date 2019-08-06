import { getAlphanumericCode } from '../../../utils'
import { IAlgorithm } from '../models/interfaces'

class Alphanumeric implements IAlgorithm {
  public getCodes(digits: number, amount: number, pattern: string): string[] {
    let alreadyExist: boolean = true
    const codesGenerated: string[] = []
    const result: string[] = Array.from(Array(amount), (x, index) => {
      do {
        const code = getAlphanumericCode(digits, pattern)
        if (codesGenerated.includes(code)) {
          alreadyExist = true
        } else {
          alreadyExist = false
          codesGenerated.push(code)
        }
      } while (alreadyExist)

      return codesGenerated[index]
    })

    return result
  }
}

export default Alphanumeric
