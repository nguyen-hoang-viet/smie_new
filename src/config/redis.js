require("dotenv").config();

const { createClient } = require("redis");

const redisConnection = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

module.exports = redisConnection;