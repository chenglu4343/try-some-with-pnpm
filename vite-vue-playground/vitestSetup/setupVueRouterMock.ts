import { VueRouterMock, createRouterMock, injectRouterMock } from 'vue-router-mock'
import { beforeEach, vi } from 'vitest'
import { config } from '@vue/test-utils'

export function setupVueRouterMock() {
  const router = createRouterMock({
    spy: {
      create: fn => vi.fn(fn),
      reset(spy) {
        spy.mockClear()
      },
    },
  })

  beforeEach(() => {
    router.reset()
    injectRouterMock(router)
  })

  config.plugins.VueWrapper.install(VueRouterMock)
}
