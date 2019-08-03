console.log("App running ...")
import { add } from 'ramda'

export class Hero {
    name: string

    constructor(name: string) {
        this.name = name
    }

    myName()
    {
        return this.name
    }
  }

  let hero = new Hero('krunal')
  console.log(hero.myName())
  console.log('SUM', add(3,3))