const { Sequelize } = require('sequelize');

// MSSQL Connection
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    dialectOptions: {
        options: {
            trustServerCertificate: true // Set to true for local/dev to avoid cert issues
        }
    },
    logging: false // Set to console.log if you want to see SQL queries
});

// Test connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = { sequelize };
