import { createSSRApp } from "vue";
import App from './App.vue'

// 通过一个工厂函数返回 app 实例，保证每个请求都会返回一个新的 app 实例，避免跨请求状态的污染
export default function createApp() {
  return createSSRApp(App)
}