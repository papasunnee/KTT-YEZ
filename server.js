const express = require('express')
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production'})
//const app = next({dev: false})
const handle = app.getRequestHandler()
const port = process.env.PORT || 9000

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
