const { Scenes } = require("telegraf");

const scene = new Scenes.BaseScene('start');

scene.enter((ctx) => {
    ctx.reply('Welcome to the bot!');
});

module.exports = scene;