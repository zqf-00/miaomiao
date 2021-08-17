import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
// import VueAxios from 'vue-axios'
const app = createApp(App)
app.config.globalProperties.$http=axios

app.use(store).use(router).mount('#app')
