const router = require('express').Router();
const userController = require('./users.controller');
const loginMiddleware = require('../login/login.middleware');

router.post('/create', userController.createUserController);
router.get('/', loginMiddleware, userController.findAllUserController);

module.exports = router;
