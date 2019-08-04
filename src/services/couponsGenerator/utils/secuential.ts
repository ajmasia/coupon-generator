import { getLargestNum, padNumber } from '../../../utils'

export default function(
  initValue: number,
  long: number,
  amount: number
): string[] {
  const macNumber = getLargestNum(long)

  if (initValue > macNumber - amount + 1) {
    return ['Error: Initial value It is higher than allowed']
  }

  const result: string[] = Array.from(Array(amount), (x, index) => {
    const num: number = index + initValue

    return padNumber(num.toString(), long)
  })

  return result
}
