const config = require('./config');
const logger = require('./logger');

const startBot = (bot, botConfig = {}) => {
    if (config.NODE_ENV === 'production') {
        botConfig.webhook = {
            domain: config.DOMAIN,
            port: config.PORT
        };
    }
    bot.launch(botConfig)
        .then(() => logger.info(`Bot @${bot.botInfo.username} started!`));
};

module.exports = startBot;