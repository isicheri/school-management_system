const Report = require('../models/course.model');
const students = require('../models/students.model');
const student = require('../models/students.model')


exports.createStudentReportById = async(req,res) => {
  try {
    const {
        name,
        score,
        grade,
        student_id
    } = req.body;
     const report = await Report.create({
       name: name,
       score: score,
       grade: grade,
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


