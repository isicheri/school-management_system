const sequelize = require('../database');
const Course = require('../models/course.model');



exports.createStudentReportById = async(req,res) => {
  try {
    await sequelize.sync()
    const {
        course_name,
        test_score,
        exam_score,
        grade,
        total,
        student_id
    } = req.body;
     const report = await Course.create({
       course_name: course_name,
       test_score: test_score,
       exam_score: exam_score,
       grade: grade,
       total: total,
       student_id: student_id
     })
     res.status(201).json({
        status: 'success',
        data: report
     })
} catch (error) {
    res.status(400).json({
        status: 'failed',
        data: error
    })
}};



exports.getAllStudentReport = async(req,res) => {

}