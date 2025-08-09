const path = require('path');
const dotenv = require('dotenv');

// Determine environment (default: development)
const env = process.env.NODE_ENV || 'development';

// Dynamically set env file path
const envFile = `.env.${env}`;

dotenv.config({ path: envFile });

console.log(`Loaded environment: ${env}`);
console.log('PORT from .env:', process.env.PORT);