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
console.log(hero.myName())
console.log('SUM', add(3, 3))
