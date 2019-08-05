export interface IAlgorithms {
  secuential(initValue: number, digits: number, amount: number): string[]
  alphanumeric(digits: number, amount: number, pattern: string): string[]
}

export interface IConfig {
  algorithm: string
  amount?: number
  digits?: number
  startWith?: number
  pattern?: string
}
