var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('views/static'))
app.get('/', function (req, res) {
  res.render('home')
})
app.get('/aim', function (req, res) {
  res.render('aim')
})
console.log('Server Started on port 8080')
app.listen(8080)
