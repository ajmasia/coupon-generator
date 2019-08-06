import Coupon from './services/codesGenerator'
// import Coupons from './services/couponsGenerator'
import { getHtmlList } from './utils'
import serviceConfig from './services/codesGenerator/config'

document.addEventListener('DOMContentLoaded', () => {
  // tslint:disable-next-line: no-console
  console.log('App running ...')

  // const coupons: string[] = Coupons.do
  // tslint:disable-next-line: no-console
  const copuponsGenerator = new Coupon(serviceConfig)
  const coupons = copuponsGenerator.generate()
  console.log('Generated coupons', coupons)

  const app = document.getElementById('app')!
  app.innerHTML = getHtmlList(coupons)
})
