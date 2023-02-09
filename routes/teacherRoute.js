const express = require('express');
const { resgisterTeacher, loginTeacher, getTeacherStudent, getTeachers, deleteTeacherById } = require('../controllers/teacherAuth.controller');

const router = express.Router()

router.route('/register').post(resgisterTeacher)
router.route('/').get(getTeachers)
router.route('/login').post(loginTeacher)
router.route('/getTeacherStudents/:id').get(getTeacherStudent)
router.route('/:id').delete(deleteTeacherById)
module.exports = router;