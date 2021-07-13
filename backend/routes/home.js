'use strict'
let express = require('express');
let router = express.Router();

let getF = require('../api/getF');

/* GET users listing. */
router.get('/info/:id', function (req, res, next) {
  let get_id = req.params.id
  let users = [{ user_name: "lee", user_age: 27 }, { user_name: "kim", user_age: 31 }]

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

router.get('/home_2/get_list/:keyword', function (req, res, next) {
  let keyword = req.params.keyword
  console.log(keyword)

  let sql = `
  SELECT pl.place_name, st.situation_code, st.situation_name FROM k_situation st INNER JOIN k_place pl ON pl.place_code = st.place_code WHERE pl.tag LIKE N'%${keyword}%'
  `;
  // let sql = `
  // SELECT kw.situation_code, st.situation_name FROM k_kaiwa kw INNER JOIN k_situation st ON st.situation_code = kw.situation_code INNER JOIN k_place pl ON pl.place_code = st.place_code WHERE pl.tag LIKE N'%${keyword}%'
  // `;
  console.log(sql)

  new Promise(function (resolve, reject) {
    getF.getF(sql, resolve)
  })
    .then(function (result) {
      console.log(result)
      let response = result.datas
      res.send({
        result: response,
        message: "good",
      })
    })
    .catch(function (err) {
      console.log('then error : ', err);
    });
});

router.get('/home_2/get_seleted_kaiwa/:situation_code', function (req, res, next) {
  let situation_code = req.params.situation_code
  console.log(situation_code)

  // let sql = `
  // SELECT * FROM k_place WHERE tag LIKE N'%${keyword}%'
  // `;
  let sql = `
  SELECT * FROM k_kaiwa kw WHERE kw.situation_code = ${situation_code}
  `;
  console.log(sql)

  new Promise(function (resolve, reject) {
    getF.getF(sql, resolve)
  })
    .then(function (result) {
      console.log(result)
      let response = result.datas
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
