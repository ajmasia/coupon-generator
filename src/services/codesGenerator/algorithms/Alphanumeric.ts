import { getAlphanumericCode } from '../../../utils'
import { IAlgorithm } from '../models/interfaces'

class Alphanumeric implements IAlgorithm {
    public getCodes(config: any): string[] {
        let alreadyExist: boolean = true
        const codesGenerated: string[] = []
        const result: string[] = Array.from(Array(config.amount), (x, index) => {
            do {
                const code = getAlphanumericCode(config.digits, config.pattern)
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
