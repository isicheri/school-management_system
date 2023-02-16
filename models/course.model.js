const {DataTypes} = require('sequelize')
const sequelize = require('../database.js')
const students = require('./students.model')

const Report = sequelize.define('report',{
     id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
       },
      name: {
          type: DataTypes.STRING
      },
      score: {
          type: DataTypes.INTEGER
      },
      grade: {
          type: DataTypes.TEXT
      },
      student_id: {
          type: DataTypes.UUID
      }
})

// students.hasOne(Report,{
//      foreignKey: 'student_id'
// })

// Report.belongsTo(students,{
//      foreignKey: 'student_id'
// })


students.hasMany(Report,{
     foreignKey: "student_id",
     as: 'report'
})

Report.belongsTo(students,{
     foreignKey: "student_id",
     as: 'student'
})

module.exports = Report;