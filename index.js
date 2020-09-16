var express = require('express');

var app = express();

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.render('index');
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

app.set('view engine', 'ejs');

app.post('/addtask', function(req, res) {
    res.render('index');
});