import Coupon from './services/couponsGenerator'
// import Coupons from './services/couponsGenerator'
import serviceConfig from './services/couponsGenerator/config'
import { getHtmlList } from './utils'

document.addEventListener('DOMContentLoaded', () => {
  // tslint:disable-next-line: no-console
  console.log('App running ...')

  const copuponsGenerator = new Coupon(serviceConfig)
  const coupons = copuponsGenerator.generate()

  // tslint:disable-next-line: no-console
  console.log('Generated coupons', coupons)

  const app = document.getElementById('app')!
  app.innerHTML = getHtmlList(coupons)
})
