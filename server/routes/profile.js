const express = require('express')
const router = express.Router()
const pool = require('../utils/mysql.js');
const { checkUser } = require('../utils/authMiddleware.js')

router.get('/:gosuId', async (req, res, next) => {
  console.log('profile connect')
  try{
    const connection = await pool.getConnection()
    console.log('profile connect')

    const [results] = await connection.query('SELECT * FROM GOSU_TB WHERE id = ?', req.params.gosuId)
    connection.release()
    console.log(results[0])
    res.json(results[0])
    // res.json({ status : 200, arr: results2 });
  } catch (err) {
    console.log(err);
    res.json({ status : 500, msg : '에러가 났어요!'})
  }
})

module.exports = router
