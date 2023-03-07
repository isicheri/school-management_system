const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const adminRouter = require('./routes/auth.routes')
const notifyRouter = require('./routes/notification.routes')
const studentRouter = require('./routes/students.routes')
const teacherRouter = require('./routes/teacherRoute')
const courseRouter = require('./routes/course.routes')
const paystackRouter = require('./Api/Api.route')
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
app.use('/api/v1/course',courseRouter)
app.use('/api/v1',paystackRouter)
app.all('*',(req,res,next) => {
const err = new Error(`can't find ${req.originalUrl} on this server`)
err.status = 'fail'
err.statusCode = 404
next(err)
})

app.use((err,req,res,next) => {
   err.statusCode = err.statusCode || 500;
   err.status = err.status || 'error';
   res.status(err.statusCode).json({
      status: err.status,
      message: err.message
   })
})


module.exports = app;