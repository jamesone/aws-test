var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('The Docker container is working (4) - THIS IS A NEW CHANGE <!> :-)')
})

app.listen(3000, function () {
  console.log('Docker app running on port 3000')
})