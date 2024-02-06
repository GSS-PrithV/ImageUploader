var express = require('express');
var router = express.Router();


/*Renders title*/
router.get('/', function(req,res,next) {
  res.render('index', {title: 'express'});
});

/* GET users listing. */
router.get('/about', function(req, res, next) {
  res.send('respond with a resources');
});

router.post('/post', function(req,res,next){
  res.send('tf this do');
});


module.exports = router;
