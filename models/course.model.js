const {DataTypes} = require('sequelize')
const sequelize = require('../database.js')

const Report = sequelize.define('report',{
    mathematics: {
         type: DataTypes.INTEGER
    },
   biology: {
        type: DataTypes.INTEGER
   },
    english: {
    type: DataTypes.INTEGER
   }
})

module.exports = Report;