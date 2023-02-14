const {DataTypes} = require('sequelize')
const sequelize = require('../database.js')
const students = require('./students.model')

const Report = sequelize.define('report',{
     id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
       },
    mathematics: {
         type: DataTypes.INTEGER
    },
   biology: {
        type: DataTypes.INTEGER
   },
    english: {
    type: DataTypes.INTEGER
   },
   futherMaths: {
     type: DataTypes.INTEGER
   },
   igbolanguage: {
     type: DataTypes.INTEGER
   },
   essay: {
     type: DataTypes.INTEGER
   },
   diction: {
     type: DataTypes.INTEGER
   },
   physics: {
     type: DataTypes.INTEGER
   },
   chemistry: {
     type: DataTypes.INTEGER
   },
   computer: {
     type: DataTypes.INTEGER
   },
   civic: {
     type: DataTypes.INTEGER
   },
literatureInEnglish: {
     type: DataTypes.INTEGER
},
government: {
     type: DataTypes.INTEGER
},
geography: {
     type: DataTypes.INTEGER
},
economics: {
     type: DataTypes.INTEGER
},
commerce: {
     type: DataTypes.INTEGER
},
marketing: {
     type: DataTypes.INTEGER
},
financialAccounting: {
     type: DataTypes.INTEGER
},
animalHusbandry: {
     type: DataTypes.INTEGER
},
cateringAndCraft: {
     type: DataTypes.INTEGER
},
foodAndNutrition: {
     type: DataTypes.INTEGER
},
christainReligiousStudy: {
     type: DataTypes.INTEGER
},
// student_id: {
//      type: DataTypes.UUID,
//      allowNull: false
// }
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