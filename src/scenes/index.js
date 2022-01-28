const { Scenes } = require("telegraf");

const stage = new Scenes.Stage([
    require('./start'),
]);

module.exports = stage;