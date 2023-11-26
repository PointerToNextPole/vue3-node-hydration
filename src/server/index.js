const express = require('express')
import createApp from '../app'
import { renderToString } from 'vue/server-renderer'
import createRouter from '../router'
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";

const server = express()
server.use(express.static('build')) // 部署静态资源服务器，因为下面请求 /client/client_bundle.js 了

// ⚠️ 注意：这里 `/` 后面一定要加上 `*`，否则无论用户输入什么 url， req.url 都只会为 `/`
server.get('/*', async (req, res) => {
  const app = createApp()

  // memory mode 内存路由，是给 node 用的
  const router = createRouter(createMemoryHistory())
  app.use(router)
  await router.push(req.url ?? '/') // 等待页面跳转好
  await router.isReady()            // 等待路由加载完成，再渲染页面

  const pinia = createPinia()
  app.use(pinia)

  const appStrHtml = await renderToString(app)

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="app">${ appStrHtml }</div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `
  )
})

server.listen(3000, () => {
  console.log('start node server on port 3000');
})