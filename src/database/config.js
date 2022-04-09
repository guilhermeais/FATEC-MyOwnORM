require('dotenv').config()
module.exports = Object.freeze({
    DB_HOSTNAME: process.env.DB_HOSTNAME,
    DB_PORT: process.env.DB_PORT || 3306,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
});