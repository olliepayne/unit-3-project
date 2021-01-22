const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')

const authRouter = require('./routes/authRouter')
const climbsRouter = require('./routes/climbsRouter')
const usersRouter = require('./routes/usersRouter')

const app = express()

// - - - middleware - - -
app.use(express.json())
app.use(cors())

// - - - routers - - -
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/climbs', climbsRouter)

// - - - start the server - - -
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))