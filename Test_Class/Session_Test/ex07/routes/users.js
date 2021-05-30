var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var cookieName = req.body.cookieName;
  var selectCookie = req.body.selectCookie;

  if(cookieName == '' || selectCookie == undefined){
    res.send("입력 값이 부족합니다");
  } else {
    if(selectCookie == 'sessionCookie'){
      res.cookie("userName", cookieName);
    } else {
      res.cookie("userName", cookieName, {maxAge: 6000});
    }
    res.send("<a href='/'>세션 쿠키 생성 완료</a>");
  }
});

module.exports = router;

