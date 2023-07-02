import { createApp } from 'vue'
import '@/style.css'
import 'virtual:uno.css'
import App from './App.vue'
import { router } from './routes'

const app = createApp(App)

app.use(router)

app.mount('#app')
