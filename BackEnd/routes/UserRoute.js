const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile', authenticateToken, userController.getProfile);

module.exports = router;