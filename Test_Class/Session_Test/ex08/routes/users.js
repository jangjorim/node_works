var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var cookieName = req.body.cookieName;
  var selectCookie = req.body.selectCookie;

  if(cookieName == '' || selectCookie == undefined){
    res.send("입력한 정보가 부족 합니다");
    
  }
});

module.exports = router;
