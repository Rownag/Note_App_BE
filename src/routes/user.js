const express = require('express');

const getUsersController = require('../controllers/users/getUsers');
const getUserController = require('../controllers/users/getUser');
const createUserController = require('../controllers/users/createUser');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.get('/users',authMiddleware, getUsersController);

router.get('/users/:userId', getUserController);

router.post('/users', createUserController)

module.exports = router;