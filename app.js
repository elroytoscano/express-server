require('dotenv').config()
require('express-async-errors')
const express = require('express')

const app = express()
const PORT = process.env.PORT

const start = async () => {
  app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`))
}

start()
