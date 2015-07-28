var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/todoList', function(req, res){
	console.log('I received a GET request');

	todo1 = {
		task : "Go to grocery store"
	};
	todo2 = {
		task : "Get haircut"
	};

	var tasks = [todo1, todo2];
	res.json(tasks)
})

app.listen(3000);
console.log('server running on port 3000');
