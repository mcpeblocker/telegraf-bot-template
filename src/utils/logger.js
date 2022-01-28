const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { time: Date.now() },
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

if (config.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
};

module.exports = logger;