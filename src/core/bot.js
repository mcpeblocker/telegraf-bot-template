const { Telegraf } = require('telegraf');
const config = require('../utils/config');

const bot = new Telegraf(config.BOT_TOKEN);

module.exports = bot;