const express = require('express');
const { registerAdmin, loginAdmin, logoutAdmin, authorisedAdmin, resetPassword } = require('../controllers/auth.controller');
const Router = express.Router()


Router.route('/register').post(registerAdmin)
Router.route('/login').post(loginAdmin)
Router.route('/logout').get(authorisedAdmin,logoutAdmin)
Router.route('/password/reset').post(authorisedAdmin,resetPassword)

module.exports = Router;