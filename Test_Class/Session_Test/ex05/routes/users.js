var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var cookieName = req.body.cookieName;
  var selectCookie = req.body.selectCookie;

  if(cookieName == '' || selectCookie == undefined){
    res.send("충분한 값이 입력(선택) 되지 않았습니다.");
  }else{
    if(selectCookie == 'sessionCookie'){
      res.cookie('userName', cookieName);
    }else {
      res.cookie('userName', cookieName, {maxAge: 6000});
    }
    res.send("<a href='/'>세션쿠키 생성완료 (돌아가기)</a>");
  }
});

module.exports = router;
