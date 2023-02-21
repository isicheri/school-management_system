const Sequelize = require('sequelize')

const sequelize = new Sequelize('promise-school_db','root','dominion123#',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize;