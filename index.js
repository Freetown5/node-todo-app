var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
    // res.send('Hello World!');
    // res.render('index');
// });

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

app.set('view engine', 'ejs');

var task = ["buy socks", "practice with nodejs"];

app.post('/addtask', function(req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});

// task(array);

app.get("/", function(req, res){
    res.render("index", { task: task, complete });
});