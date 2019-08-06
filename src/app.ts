import codes from './services/codesGenerator'
import Coupons from './services/couponsGenerator'
import { getHtmlList } from './utils'

document.addEventListener('DOMContentLoaded', () => {
  // tslint:disable-next-line: no-console
  console.log('App running ...')

  const coupons: string[] = Coupons.generate()
  // tslint:disable-next-line: no-console
  console.log('Generated coupons', codes)

  const app = document.getElementById('app')!
  app.innerHTML = getHtmlList(codes)
})
