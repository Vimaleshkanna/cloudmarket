const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { client, managementClient } = require('../config/contentful.config');

const register = async (req, res) => {
    try {
        const { name, email, password, zipcode, addressOne, addressTwo, phoneno } = req.body;

        // Validate input
        if (!name || !email || !password || !zipcode || !addressOne || !addressTwo || !phoneno) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }

        // Check if user already exists
        const existingUser = await client.getEntries({
            content_type: 'login',
            'fields.email': email, // filter by field
            limit: 1 // only one result
        });

        if (existingUser.total > 0) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Save new user

        const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE);
        const environment = await space.getEnvironment('master'); // or your env name

        const newUser = await environment.createEntry('login', {
            fields: {
                name: { 'en-US': name },
                email: { 'en-US': email },
                password: { 'en-US': hashedPassword },
                zipcode: { 'en-US': zipcode },
                addressOne: { 'en-US': addressOne },
                addressTwo: { 'en-US': addressTwo },
                phoneno: { 'en-US': phoneno },
                role: { 'en-US': 'User' }
            }
        });

        // Publish so Delivery API can fetch it
        await newUser.publish();

        // Return success (never return the password)
        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                name: name,
                email: email
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
        const user = await client.getEntries({
            content_type: 'login',
            'fields.email': email, // filter by field
            limit: 1 // only one result
        });

        if (user.total === 0) {
            return res.status(401).json({ message: 'User email not found' });
        }

        console.log("password :: " + JSON.stringify(user?.['items'][0]['fields']));
        // Compare password
        const userDetails = user?.['items'][0]['fields'];
        const isMatch = await bcrypt.compare(password, userDetails['password']);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        let userObj = {};
        userObj['name'] = userDetails['name'];
        userObj['email'] = userDetails['email'];
        userObj['role'] = userDetails['role'];

        // Generate JWT token
        const token = jwt.sign(
            userObj,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Store session data
        req.session.sessionObj = userObj;

        console.log("req.session.sessionObj :: " +  req.session.sessionObj)

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
