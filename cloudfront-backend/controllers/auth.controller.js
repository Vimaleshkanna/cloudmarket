const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const client = require('../config/contentful.config');


const register = async (req, res) => {
    try {
        const { name, email, password, zipCode, addressOne, addressTwo, phoneNo } = req.body;

        // Validate input
        if (!name || !email || !password || !zipCode || !addressOne || !addressTwo || !phoneNo) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }

        // Check if user already exists

        const existingUser = await client.getEntries({
            content_type: 'login',
            'fields.email': email, // filter by field
            limit: 1 // only one result
        });

        console.log("existingUser :: " + JSON.stringify(existingUser))
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Save new user
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            zipCode,
            addressOne,
            addressTwo,
            phoneNo,
            role: 'User'
        });

        // Return success (never return the password)
        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user
        const user = await userModel.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'User email not found' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        let userObj = {};
        userObj['id'] = user['id'];
        userObj['name'] = user['name'];
        userObj['email'] = user['email'];
        userObj['role'] = user['role'];

        // Generate JWT token
        const token = jwt.sign(
            userObj,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Store session data
        req.session.sessionObj = userObj;

        // Response
        return res.status(200).json({
            message: 'Login successful',
            token,
            user: userObj
        });

    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { register, login };
