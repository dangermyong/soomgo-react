const express = require('express')
const router = express.Router()
const pool = require('../utils/mysql.js');
const { checkUser } = require('../utils/authMiddleware.js')

router.get('/search/pro', checkUser, async (req, res, next) => {
  let searchOptions = req.query.search;
  let searchQuery ="hi";
  if (typeof searchOptions == "undefined") {
    searchQuery = "SELECT * FROM GOSU_TB"
  } else if (searchOptions.indexOf(' ') >= 0) {
    searchOptions = searchOptions.replace(" ","|");
    searchQuery = `SELECT * FROM GOSU_TB WHERE CONCAT(subject, address) REGEXP "${searchOptions}"`;
  } else {
    searchQuery = `SELECT * FROM GOSU_TB WHERE CONCAT(subject, address) REGEXP "${searchOptions}"`;
  }
  try{
    const connection = await pool.getConnection();
    const [results] = await connection.query(searchQuery);
    for (result of results) {
      const [review] = await connection.query(`SELECT * FROM REVIEW_TB WHERE userId = ${result.id}`);
      result.review_name = review.length > 0? review[0].name : "";
      result.review_comment = review.length > 0? review[0].comment : "";
    }
    connection.release();
    userName = req.token ? req.token.name : false
    res.status(200).json({ userName, results})
    // res.render('searchPro', { userName, data: results });
    
  } catch (err) {
    console.log(err);
    res.json({ status : 500, msg : '에러가 났어요!'});
  }
  
});

module.exports = router