const express = require('express')
const cors = require('cors')
const path = require('path');
const favicon = require('serve-favicon');
require('dotenv').config()
require('./config/database')

const authRouter = require('./routes/authRouter')
const climbsRouter = require('./routes/climbsRouter')
const usersRouter = require('./routes/usersRouter')

const app = express()

// - - - middleware - - -
app.use(express.json())
app.use(cors())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// - - - routers - - -
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/climbs', climbsRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// - - - start the server - - -
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))