const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public Routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Protected Routes
router.get('/profile', authMiddleware, async (req, res) => {
  res.send(`Welcome, your User ID is ${req.user.userId}`);
});

module.exports = router;
