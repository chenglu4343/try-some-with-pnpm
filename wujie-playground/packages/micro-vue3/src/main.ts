/* eslint-disable no-console */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

function setupApp() {
  const instance = createApp(App)

  instance.mount('#app')

  return {
    stop: () => {
      instance.unmount()
    },
  }
}

if (window.__POWERED_BY_WUJIE__) {
  if (window.$wujie?.props?.single) {
    let stop = () => {}

    window.__WUJIE_MOUNT = () => {
      console.log('micro-vue3 __WUJIE_MOUNT')
      const { stop: _stop } = setupApp()
      stop = _stop
    }
    window.__WUJIE_UNMOUNT = () => {
      console.log('micro-vue3 __WUJIE_UNMOUNT')
      stop()
    }
  }
  else {
    setupApp()
  }
}
else {
  setupApp()
}
