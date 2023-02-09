const {DataTypes} = require('sequelize')
const sequelize = require('../database.js');
const Report = require('./course.model.js');


const students = sequelize.define('student',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DOB: {
        type: DataTypes.STRING,
    },
    LGA: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    yearOfAdmission: {
        type: DataTypes.INTEGER,
    },
    previousClass: {
        type: DataTypes.STRING,
    },
    teacher_id: {
        type: DataTypes.UUID,
        required: true,
        allowNull: false
    }
})

students.hasOne(Report,{
    foreignKey: 'students_id'
})

Report.belongsTo(students,{
    foreignKey: 'students_id'
})


module.exports = students;