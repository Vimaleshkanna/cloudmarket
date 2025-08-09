const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        // Get token from Authorization header
        const token = req.headers['authorization'];

        // If no token found
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid or expired token.' });
            }

            // Attach decoded payload to request
            req.user = decoded;
            next();
        });

    } catch (error) {
        console.error('Verify token Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    verifyToken
};
