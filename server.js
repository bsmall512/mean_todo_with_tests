var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('todoList', ['todoList']);
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// gets all items currently in db
app.get('/todoList', function(req, res){
    db.todoList.find(function(err, docs){
    	res.json(docs);
    })
})

// posts new item to db
app.post('/todoList', function(req, res){
	db.todoList.insert(req.body, function(err, docs){
		res.json(docs);
	});
})

// removes item from db
app.delete('/todoList/:id', function(req, res){
  var id = req.params.id;
  db.todoList.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
  	res.json(doc);
  });
})

// retrieves a single item from the db
app.get('/todoList/:id', function(req, res){
	var id = req.params.id;
	db.todoList.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
})

// sends updated item to the db
app.put('/todoList/:id', function(req, res){
	var id = req.params.id;
	db.todoList.findAndModify({query: {_id: mongojs.ObjectId(id)}, 
		update: {$set: {task: req.body.task}},
		new: true}, function (err, doc){
			res.json(doc);
		});
})

app.listen(3000);
console.log('server running on port 3000');
