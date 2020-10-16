const Dotenv = require('dotenv');

Dotenv.config({
    silent: true,
});

module.exports = {
    DB: {
        USERNAME: process.env.DB_USERNAME || 'user',
        PASSWORD: process.env.DB_PASSWORD || 'hit#@!@21',
        NAME: process.env.DB_NAME || 'hit8',
        HOST: process.env.DB_HOST || '127.0.0.1',
        DIALECT: process.env.DB_DIALECT || 'mysql',
        PORT: process.env.DB_PORT || '3307',
    },
    HTTP_STATUS_CODES: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,
        TOO_MANY_REQUESTS: 429,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
    },
    JWT: {
        ACCESS_TOKEN: {
            SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY || 'sec#$@$$retKey',
            EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || 300,
        },
        REFRESH_TOKEN: {
            SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY || 'secretKADASDey',
            EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || 907200,
        },
    },
    REDIS: {
        PORT: process.env.REDIS_PORT || 6379,
        HOST: process.env.REDIS_HOST || '127.0.0.1',
    },
};
