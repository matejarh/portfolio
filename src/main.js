import './assets/main.css'
import logo from './assets/logo.svg'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  mirror: false,
  disable: 'mobile',
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/svg+xml';
link.href = logo;
document.head.appendChild(link);