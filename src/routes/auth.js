const express = require('express');
const loginController = require('../controllers/auth/login');

const router = express.Router();

router.post('/auth/login', loginController);

module.exports = router