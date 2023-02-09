const Sequelize = require('sequelize')

const sequelize = new Sequelize('promise-school_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize;