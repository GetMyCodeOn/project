var express = require('express'); //need express methods
var router = express.Router(); //need the router method in express
/*var db = require('../models/projects.js');*/

//Get user listing

//router.get('/', function(req, res) {
//  res.json(db);

//res= response. Not building a template, sending some data back
//}); //controller: given some route, what you should do in repsonse to it


//find all

router.get('/', function(req, res) {
    req.db.collection('projects').find().toArray(function (err, items) { 
        res.json(items); 
    }); 
});

//find a particular item

router.get('/:name', function(req, res) {   
  	req.db.collection('projects').findOne({name: req.params.name}, // first argument, search criteria 
  		function (err, item) {		//callback 
        res.json(item); 
    }); 
});

//create a new thing

router.post('/', function(req, res) {   
  	req.db.collection('projects').insert(req.body, function(err, item) {
  		res.send('created a new thing'); 	
    }); 
});

//$.postJson

//form method = post

//update

router.post('/:name', function(req, res) {   
  	req.db.collection('projects').update({ name:  req.params.name }, req.body, function(err, item) {
  		res.send('updated a thing'); 	
    }); 
});

//delete

router.delete('/:name', function(req, res) {
	req.db.collection('projects').remove({ name: req.params.name }, req.body, function(err, item) {
	res.send('deleted a thing');
	});
});

module.exports = router;




/*
//created new get-':id'
router.get('/:id', function(req, res) {
  res.send(db[req.params.id]); //res= response. Not building a template, sending some data back
});

router.put('/:id', function(req, res) {
  res.send('this is where we create a new project'); 
});

//get put post and delete methods 
//can create a restful api
*/




module.exports = router;