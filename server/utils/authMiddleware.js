const jwt = require('jsonwebtoken');
const pool = require('../utils/mysql.js');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        req.token = decodedToken
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
      } else {
        req.token = decodedToken
        console.log(decodedToken)
        next();
      }
    })
  } else {
    next()
  }
};

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

module.exports = { requireAuth, checkUser, logout };
