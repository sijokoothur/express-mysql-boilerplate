const bluebird = require('bluebird');
const redis = require('redis');

bluebird.promisifyAll(redis.RedisClient.prototype);
const loggerUtil = require('./logger');

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

const set = async (key, data, expiry) => {
    try {
        const result = await client.setAsync(key, data, 'EX', expiry);
        return result;
    } catch (ex) {
        loggerUtil.error({
            message: ex.toString(),
            level: 'error',
        });
        return false;
    }
};

const get = async (key) => {
    try {
        const data = await client.getAsync(key);
        return data;
    } catch (ex) {
        loggerUtil.error({
            message: ex.toString(),
            level: 'error',
        });
        return false;
    }
};

const del = async (key) => {
    try {
        await client.delAsync(key);
        return true;
    } catch (ex) {
        loggerUtil.error({
            message: ex.toString(),
            level: 'error',
        });
        return false;
    }
};

module.exports = {
    set,
    get,
    del,
};
