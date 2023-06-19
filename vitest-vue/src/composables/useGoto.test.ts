import { describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { useGoto } from './useGoto'

describe('test useGoto', () => {
  it('should gotoHome', () => {
    const Comp = defineComponent(() => {
      const { gotoHome } = useGoto()
      gotoHome()

      return () => null
    })
    const wrapper = mount(Comp)

    expect(wrapper.router.push).toBeCalledWith('/home')

    wrapper.unmount()
  })

  it('should reset', () => {
    const Comp = defineComponent(() => {
      return () => null
    })
    const wrapper = mount(Comp)

    expect(wrapper.router.push).toBeCalledTimes(0)

    wrapper.unmount()
  })
})
