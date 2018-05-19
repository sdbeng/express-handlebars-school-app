var express = require('express')
var exphbs = require('express-handlebars')

var app = express()
var PORT = process.env.PORT || 3013 

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// demo data
let title = 'cool hacker coddyy app!'
var lunches = [
    {lunch: "chicken salad sandwich"},
    {lunch: "spaghetti with meatballs"},
]

//1st test route
app.get('/', function(req, res){
    res.render('index', {title})
})
// get route to /weekday
app.get('/weekday', function(req, res){
    res.render('index', lunches[0])
})
// get route to /weekend
app.get('/weekend', function(req, res){
    res.render('index', lunches[1])
})
// get route to /lunches
app.get('/lunches', function(req, res){
    res.render('index', {
        lunches:lunches,
        title:title
    })
})


//server
app.listen(PORT, function(){
    console.log('Server running on port ', PORT )
})