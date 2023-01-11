const {DataTypes} = require('sequelize')
const sequelize = require('../database')

const ADMIN = sequelize.define('admin',{
fullName: {
    type: DataTypes.STRING,
    allowNull: false
},
email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
},
password: {
    type: DataTypes.STRING,
    allowNull: false  
},
isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
}
},{ timeStamps: false })

module.exports = ADMIN;