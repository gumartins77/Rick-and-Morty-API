const router = require('express').Router();
const userController = require('./users.controller');

router.post('/create-users', userController.createUserController);
router.get('/find-users', userController.findAllUserController);

module.exports = router;
