const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const adminRouter = require('./routes/auth.routes')
const notifyRouter = require('./routes/notification.routes')
const studentRouter = require('./routes/students.routes')
const teacherRouter = require('./routes/teacherRoute')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require("./swagger.json")
const app = express()
dotenv.config({ path: './config.env' })
app.use(cors())
app.use(express.json())
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument))
app.use('/api/v1/admin',adminRouter)
app.use('/api/v1/student',studentRouter)
app.use('/api/v1/notification',notifyRouter)
app.use('/api/v1/teacher',teacherRouter)
module.exports = app;

// @Alpha001


