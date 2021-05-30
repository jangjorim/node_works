var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var cookieName = req.body.cookieName;
  var selectCookie = req.body.selectCookie;

  if(cookieName == '' || selectCookie == undefined){
    res.send("입력 값이 부족함");
  } else {
    if(selectCookie == 'sessionCookie'){
      res.cookie("userName", cookieName);
    } else{
      res.cookie("userName", cookieName, {maxAge: 5000});
    }
    res.send("<a href='/'>세션 쿠키 생성 돌아가기</a>");
  }
});

module.exports = router;
