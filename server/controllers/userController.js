const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
        const user = await User.create({ name, email, password: hashedPassword, otp });

        sendOTPEmail(email, otp);
        res.status(201).json({ message: 'User registered, check your email for OTP.' });
    } catch (err) {
        res.status(400).json({ message: 'User already exists' });
    }
};

exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (user && user.otp == otp) {
        user.isVerified = true;
        await user.save();
        res.json({ message: 'Email verified successfully!' });
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password) || !user.isVerified) {
        return res.status(400).json({ message: 'Invalid credentials or email not verified' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
};

function sendOTPEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        text: `Your OTP is ${otp}`
    });
}
