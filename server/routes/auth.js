const express = require('express')
const router = express.Router()

const { signup, signin, signout, checkLogin } = require('../controllers/auth')

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/signout', signout)
router.get('/checklogin', checkLogin)
// router.get('/signout', signout)

module.exports = router