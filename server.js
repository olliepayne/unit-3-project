const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')

const userRouter = require('./routes/userRouter')

const app = express()

// - - - middleware - - -
app.use(express.json())
app.use(cors())

// - - - routers - - -
app.use('/api/users', userRouter)

// - - - start the server - - -
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))