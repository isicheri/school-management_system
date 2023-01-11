const Sequelize = require('sequelize')

const sequelize = new Sequelize('promise-school_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize;



// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('alimisam_Promise','alimisam_promise-user','Promise@2022',{
//     host: 'localhost',
//     dialect: 'mysql'
// })


// module.exports = sequelize;