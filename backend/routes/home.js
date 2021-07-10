var express = require('express');
var router = express.Router();

var getF = require('../api/getF');

/* GET users listing. */
router.get('/info/:id', function (req, res, next) {
  var get_id = req.params.id
  var users = [{ user_name: "lee", user_age: 27 }, { user_name: "kim", user_age: 31 }]

  if (get_id == 1) {
    res.send({
      result: users[0],
      message: "good"
    })
  } else {
    res.send({
      result: users[1],
      message: "good"
    })
  }

});

router.get('/home_2', function (req, res, next) {

  var sql = `
  SELECT * FROM k_situation
  `;

  new Promise(function (resolve, reject) {
    getF.getF(sql, resolve)
  })
    .then(function (result) {
      console.log(result)
      var response = result.datas
      res.send({
        result: response,
        message: "good",
      })
    })
    .catch(function (err) {
      console.log('then error : ', err);
    });
});

module.exports = router;
