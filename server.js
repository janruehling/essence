const compression = require('compression')
const express = require('express')
const app = express()

// const oneDay = 86400000

app.use(compression({threshold: 0}))

app.use(express.static(__dirname + '/dist'))

app.all('/*', function (req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/dist' })
})

const port = process.env.PORT || 5000

const server = app.listen(port, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('WebApp listening at http://%s:%s', host, port)
})
