const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder()
    .setName('hello-bot')
    .setDescription('인사박는다.')

const action = () => {
    return async (interaction)=>{
        console.log(
            `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
        );
        const username = interaction.user.username;
        await interaction.reply({ content: `Hello ${username}~~`, ephemeral: true });
    }

};

module.exports = {
    command,
    action,
};
