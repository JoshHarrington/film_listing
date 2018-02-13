var express = require('express');
var router = express.Router();
var films = require('../public/assets/films.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    films: films
  })
});


module.exports = router;
