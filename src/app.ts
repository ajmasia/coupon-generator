// tslint:disable-next-line: no-console
console.log('App running ...')
import { add } from 'ramda'

export class Hero {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  public myName() {
    return this.name
  }
}

const hero = new Hero('krunal')
// tslint:disable-next-line: no-console
console.log(hero.myName())
// tslint:disable-next-line: no-console
console.log('SUM', add(3, 3))
