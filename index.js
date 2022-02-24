var express = require('express')
var cookieParser = require('cookie-parser')
const { createCanvas } = require('node-canvas')

const PORT = process.env.PORT || 80

var app = express()
app.use(cookieParser())
app.use(function (req, res) {
  var lines = `${req.method} ${req.originalUrl}\n${Object.entries(req.headers).map(entry => entry.join(': ')).join("\n")}`.split("\n")
  var canvas = createCanvas(2048, 2048)
  const ctx = canvas.getContext('2d')
  ctx.font = '16px sans'
  var metrics = ctx.measureText('Foo')
  let lineHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + 10

  lines.forEach((line, idx) => {
    console.log(line);
    ctx.fillText(line, 10, 10 + metrics.actualBoundingBoxAscent + (idx * lineHeight))
  });

  res.status(200)
  res.set('Content-Type', 'image/png')

  const png = canvas.createPNGStream()
  png.pipe(res)
  console.log(`--------------------------------------------------------`)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  console.log(`--------------------------------------------------------`)
})
