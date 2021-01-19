const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRouter = require('./routes/authRouter')

const app = express()

// - - - middleware - - -
app.use(express.json())
app.use(cors())

// - - - routers - - -
app.use('/api/auth', authRouter)

// - - - start the server - - -
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))