var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.userName){
    res.send(`생성된 쿠키: ${req.cookies.userName}`);
  }else{
    res.render('index', { title: '쿠키 생성하기' });
  }
  
});

module.exports = router;
