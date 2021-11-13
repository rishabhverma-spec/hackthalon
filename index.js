var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('views/static'))
app.get('/', function (req, res) {
  res.render('home')
})
app.get('/iit', function (req, res) {
  res.render('iit')
})
app.get('/neet', function (req, res) {
  res.render('neet')
})
app.get('/aim', function (req, res) {
  res.render('aim')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})
console.log('Server Started on port 8080')
app.listen(8080)
