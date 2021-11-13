var express = require('express');
var mysql = require('mysql');
var app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static("views/static"));
var con = mysql.createConnection({
   host: "db4free.net",
   user: "rrrsgtrio",
   password: "ravi*123#",
   database : "counselling_web"
 });
 con.connect(function(err) {
   if (err) throw err;
   con.query("SELECT state FROM sssrgtrio", function (err, result, fields) {
     if (err){ throw err};
     console.log(result);
     app.get('/iit', function(req, res){
      res.render("iit",{d:result});
    });
    app.get('/neet', function(req, res){
      res.render("neet",{d:result});
   });
   });
 });
 app.get('/', function(req, res){
   res.render("home") ;
});
app.get('/aim', function(req, res){
   res.render("aim");
});
app.get('/contact', function(req, res){
  res.render("contact");
});
console.log("Server Started on port 8080");
app.listen(8080);

