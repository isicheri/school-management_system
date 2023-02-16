const {createStudentReportById, getAllReportCard, updateStudentReport,} = require('../controllers/course.controller')
const express = require('express');
const { getStudentReport } = require('../controllers/students.controllers');
// const { getStudentReportById } = require('../controllers/students.controllers');
const router = express.Router()

router.route('/').post(createStudentReportById).get(getStudentReport)

module.exports = router;