export interface IAlgorithm {
  getCodes(arg: any): string[]
}

export interface IConfig {
  algorithm: string
  config: any
}
