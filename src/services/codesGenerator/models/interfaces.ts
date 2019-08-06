export interface IAlgorithm {
  getCodes(arg1: number, arg2: number, arg3: any): string[]
}

export interface IConfig {
  algorithm: string
  amount: number
  digits: number
  startWith: number
  pattern: string
}
