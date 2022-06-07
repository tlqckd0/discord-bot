require('dotenv').config();
const config = require('./config');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


const register = require('./deploy-commands');

register.registerActions(client);
register.registerCommands({
    token: config.DISCORD_BOT_TOKEN,
    clientId: config.CLIENT_ID,
    guildId: config.TO_REGISTER_GUILD,
})

client.once('ready', (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(config.DISCORD_BOT_TOKEN);