const router = require('express').Router()

const authRouter = require('./auth.router.js')

// const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)

module.exports = router
