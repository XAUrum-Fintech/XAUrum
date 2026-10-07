import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App).use(router)

// Mount once the first page has loaded, so the footer never renders above an empty page and then jumps.
router.isReady().then(() => app.mount('#app'))
