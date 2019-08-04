import { getAlphanumericCode, getHighestNumOf, padNumber } from '../../../utils'

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
      const code: number = index + initValue

      return padNumber(code.toString(), digits)
    })

    return result
  }

  public alphanumeric(
    digits: number,
    amount: number,
    pattern: string
  ): string[] {
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

export default new Algorithm()
