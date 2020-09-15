const crypto = require('crypto')

const pool = require('../utils/mysql.js');

exports.signup = async (req, res) => {
  console.log('start')
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const saltByte = await crypto.randomBytes(64)
  const salt = saltByte.toString('base64')
  const hashedPwdByte = crypto.pbkdf2Sync(password, salt, 100000, 64, 'SHA512')
  const hashedPassword = hashedPwdByte.toString('base64')

  const connection = await pool.getConnection()
  const sql = `INSERT INTO USER_TB(name, email, hashedPassword, salt) VALUES("${name}", "${email}", "${hashedPassword}", "${salt}")`
  await connection.query(sql, (err, results) => {
    if(err) {
      connection.release()
      return res.status(400).json({
        error: err.message
      })
    }
    connection.release()
    res.json({ name, email, hashedPassword, salt })
  })
}
