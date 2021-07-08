var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info/:id', function(req, res, next) {
  var get_id = req.params.id
  var users = [{ user_name: "lee", user_age: 27 },{ user_name: "kim", user_age: 31 }]

  if(get_id == 1){
    res.send({
      result: users[0],
      message: "good"
    })
  }else{
    res.send({
      result: users[1],
      message: "good"
    })
  }
  
});

module.exports = router;
