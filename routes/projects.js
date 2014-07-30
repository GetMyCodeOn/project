var express = require('express'); //need express methods
var router = express.Router(); //need the router method in express
var db = require('../models/projects.js');

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


/* GET users listing. */
router.get('/', function(req, res) {
  res.json(db);

//res= response. Not building a template, sending some data back
}); //controller: given some route, what you should do in repsonse to it


//created new get-':id'
router.get('/:id', function(req, res) {
  res.send(db[req.params.id]); //res= response. Not building a template, sending some data back
});

router.put('/:id', function(req, res) {
  res.send('this is where we create a new project'); 
});

//get put post and delete methods 
//can create a restful api





module.exports = router;