import type { VueWrapper } from '@vue/test-utils'
import type { RouterMock } from 'vue-router-mock'

declare class VueWrapper {
  router: RouterMock
}
