import { createApp } from 'vue'
import '@/style.css'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './routes'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
