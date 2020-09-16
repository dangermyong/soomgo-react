const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// import routes
const authRoutes = require('./routes/auth')
const searchRoutes = require('./routes/search')

// app
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

  //routes middleware
app.use('/api', authRoutes)
app.use('/api', searchRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})