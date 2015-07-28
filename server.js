var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('todoList', ['todoList']);

app.use(express.static(__dirname + '/public'));

app.get('/todoList', function(req, res){
	console.log('I received a GET request');
    
    db.todoList.find(function(err, docs){
    	console.log(docs);
    	res.json(docs);
    })
})

app.listen(3000);
console.log('server running on port 3000');
