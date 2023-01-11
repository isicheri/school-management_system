const app = require('./index.js')
const sequelize = require('./database')
const dotenv = require('dotenv')
let port = 4000 || process.env.PORT
app.listen(port,() => {
    console.log('server is running')
})
sequelize.authenticate().then(function(){
  console.log("success");
}).catch(function(error){
  console.log("error: "+error);
});