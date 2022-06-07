const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const hello = require('./hello'),
    info = require('./info'),
    select = require('./select');

const action_map = {
    'hello-bot': hello.action(),
    'info': info.action(),
    'select': select.action(),
};

const registerCommands = ({ token, clientId, guildId }) => {
    const rest = new REST({ version: '9' }).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
    })
        .then(() => console.log('command register fin'))
        .catch(console.error);
};

const commands = [hello.command, info.command, select.command].map((command) =>
    command.toJSON()
);

const registerActions = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;
        const action_cmd = action_map[interaction.commandName];
        await action_cmd(interaction);
    });
};

module.exports = {
    registerCommands,
    registerActions,
};
