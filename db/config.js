const config = require('../config');

module.exports = {
    username: config.DB.USERNAME,
    password: config.DB.PASSWORD,
    database: config.DB.NAME,
    host: config.DB.HOST,
    dialect: config.DB.DIALECT,
    port: config.DB.PORT,
};
