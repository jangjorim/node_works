var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var cookieName = req.body.cookieName;
  var selectCookie = req.body.selectCookie

  if(cookieName == '' || selectCookie == undefined){
    res.send("충분한 값들이 입력(선택)되지 않음");
  } else{
    if(selectCookie == 'sessionCookie'){
      res.cookie('userName', cookieName);
    }else{
      res.cookie('userName', cookieName, {maxAge:6000});
    }
    res.send("<a href='/'>세션쿠키 생성완료(돌아가기)</a>");
  }
  res.end();
});

module.exports = router;
