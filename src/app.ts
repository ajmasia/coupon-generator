import Coupons from './services/couponsGenerator'
import { getHtmlList } from './utils'

document.addEventListener('DOMContentLoaded', () => {
  console.log('App running ...')

  const coupons: string[] = Coupons.generate(1)
  console.log('Generated coupons', coupons)

  const app = document.getElementById('app')!
  app.innerHTML = getHtmlList(coupons)
})
