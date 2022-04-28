const router = require('express').Router();
const loginController = require('./login.controller');

router.post('/login', loginController.loginController);

module.exports = router;
