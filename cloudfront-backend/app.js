const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
require('./config/environment.config');

const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');

const app = express();

process.env.NODE_ENV = 'development';

const PORT = process.env.PORT;

// require('./config/db.config');


// ===== Middlewares =====
app.use(helmet()); // security headers
app.use(cors());   // allow cross-origin requests
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: true })); // parse URL-encoded form data

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRECT_KEY, // change to env var in real apps
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // true only with HTTPS
        maxAge: 1000 * 60 * 30 // 30 minutes
    }
}));

// Routes
// const routes = require('./routes');
app.use('/auth', authRoute);
app.use('/product', productRoute);


// Not found middleware
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
});

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err);
    // Exit the process after logging
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Exit the process after logging
    process.exit(1);
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
