import { createApp } from "vue";
import App from '../App.vue'
import createRouter from '../router'
import { createWebHistory } from "vue-router";

const app = createApp(App)

const router = createRouter(createWebHistory())
app.use(router)

await router.isReady()

app.mount('#app')