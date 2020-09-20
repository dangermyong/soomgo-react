const crypto = require('crypto')
const pool = require('../utils/mysql.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const maxAge = 24 * 60 * 60 * 10;

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
      console.log(err.sqlMessage)
      return res.status(400).json({
        err: err.sqlMessage
      })
    }
    connection.release()
    res.json({ name, email, hashedPassword, salt })
  })
}

exports.signin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const connection = await pool.getConnection();
    const [users] = await connection.query('SELECT * FROM USER_TB WHERE email = ?', email);
    if (users.length == 0) {
      connection.release();
      return res.status(400).json({ err: 'Cannot find user' })
    }
    const user = users[0];
    const loginHashedPwdByte = crypto.pbkdf2Sync(password, user.salt, 100000, 64, 'SHA512');
    const loginHashedPwd = loginHashedPwdByte.toString('base64');
    if (loginHashedPwd !== user.hashedPassword) {
      connection.release();
      return res.json({ status: 401, msg: "일치하지 않는 비밀번호 입니다."})
    }
    connection.release();
    const payload = { id: user.id, name: user.name };
    const token = await jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    return res.json({ message: 'sign in successfully'})
  } catch (error) {
      console.log(error);
      res.json({ status:500, msg: "에러가 났어요!"});
  }
}

exports.checkLogin = (req, res) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
      } else {
        req.token = decodedToken
        console.log(decodedToken)
        return res.json({ user: decodedToken, message: 'sign in successfully'})
      }
    })
  }
}