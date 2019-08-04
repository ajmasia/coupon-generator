export interface IAlgorithm {
  secuential(initValue: number, digits: number, amount: number): string[]
  alphanumeric(digits: number, amount: number, pattern: string): string[]
}
