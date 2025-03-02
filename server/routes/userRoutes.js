const router = require('express').Router();
const { register, verifyOTP, login } = require('../controllers/userController');

router.post('/register', register);
router.post('/verify-otp', verifyOTP);
router.post('/login', login);

module.exports = router;
