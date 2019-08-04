import Coupons from './services/couponsGenerator'
import { getHtmlList } from './utils'

document.addEventListener('DOMContentLoaded', () => {
  // tslint:disable-next-line: no-console
  console.log('App running ...')

  const coupons: string[] = Coupons.generate(99995)
  // tslint:disable-next-line: no-console
  console.log('Generated coupons', coupons)

  const app = document.getElementById('app')!
  app.innerHTML = getHtmlList(coupons)
})
