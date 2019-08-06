import { getAlphanumericCode } from '../../../utils'
import { IAlgorithm } from '../models/interfaces'

class Alphanumeric implements IAlgorithm {
  public getCodes(config: any): string[] {
    let alreadyExist: boolean = true
    const { amount = 5, digits = 5, pattern = '#A' } = config
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
