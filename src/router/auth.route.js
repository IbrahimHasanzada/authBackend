const { Router } = require('express');
const authMidlleware = require('../middlewares/auth.middleware');
const userValidations = require('../validations/user.validations');
const authController = require('../controllers/auth.controller');
const loginControllers = require('../controllers/login.controller');
const loginValidations = require('../validations/login.validation');
const authRouter = Router()

authRouter.get('/users', authController.getUsers)
authRouter.post('/users', authMidlleware.authRegister(userValidations.register), authController.register)
authRouter.delete('/users/:id', authController.deleteUser)


authRouter.post('/login', authMidlleware.authRegister(loginValidations.login) , loginControllers.loginUser)

module.exports = authRouter;