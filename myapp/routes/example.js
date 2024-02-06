var express = require('express');
var router = express.Router();



router.get('/a', function(req, res){
    res.send('Hello from A!')
  });



router.get('/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
});



const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}
const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}
const cb2 = function (req, res) {
  res.send('Hello from C!')
}

router.get('/c', [cb0, cb1, cb2])

router.get('/pic', function(req,res){
    
});


module.exports = router;