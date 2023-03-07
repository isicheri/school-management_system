const Sequelize = require('sequelize')

const sequelize = new Sequelize('promise-school_db','root','dominion123#',{
    host: 'localhost',
    dialect: 'mysql'
})


// const sequelize = new Sequelize('alimisam_new-promise-db','alimisam_new_promise','promise@new',{
//     host: 'localhost',
//     dialect: 'mysql'
// })


module.exports = sequelize;