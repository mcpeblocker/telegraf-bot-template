const config = require("../utils/config")

const RedisSession = require('telegraf-session-redis');
const { session: memorySession } = require('telegraf');

const session = config.SESSION_TYPE === 'redis' ?
    new RedisSession({
            store: {
                host: config.REDIS_HOST || '127.0.0.1',
                port: config.REDIS_PORT || 6379
            }
        })
    :
    memorySession();

module.exports = session;