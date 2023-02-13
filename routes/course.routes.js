const {getStudentReportById,createStudentReportById} = require('../controllers/course.controller')
const express = require('express')
const router = express.Router()

router.route('/').post().get().delete()

module.exports = router;