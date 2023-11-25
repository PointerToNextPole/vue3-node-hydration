const express = require('express')
import createApp from '../app'
import { renderToString } from 'vue/server-renderer'

const server = express()
server.use(express.static('build')) // 部署静态资源服务器，因为下面请求 /client/client_bundle.js 了

server.get('/', async (req, res) => {
  const app = createApp()
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
      <div id="app">${appStrHtml}</div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `
  )
})

server.listen(3000, () => {
  console.log('start node server on port 3000');
})