const Report = require('../models/course.model');
const students = require('../models/students.model');


exports.createStudentReportById = async(req,res) => {
try {
    const {
        mathematics,
        biology,
        futherMaths,
        english,
        computer,
        student_id
    } = req.body;
    
     const report = await Report.create({
       mathematics: mathematics,
       biology: biology,
       futherMaths: futherMaths,
       english: english,
       computer: computer,
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
}
};

exports.getAllReportCard = async (req,res) => {
    try {
        const reports = await Report.findAll()
        res.status(200).json({
            status: 'success',
            data: reports
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            data: error
        })
    }
};



