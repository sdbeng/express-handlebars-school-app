var express = require('express')
var exphbs = require('express-handlebars')

var app = express()
var PORT = process.env.PORT || 3013 

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//1st route
app.get('/', function(req, res){
    res.render('index', {title: 'cool hacker coddyy app!'})
})

//server
app.listen(PORT, function(){
    console.log('Server running on port ', PORT )
})