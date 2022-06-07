const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder()
    .setName('select')
    .setDescription('골라봐라.')
    .addStringOption((option) =>
        option
            .setName('category')
            .setDescription('select')
            .setRequired(true)
            .addChoices(
                { name: 'Funny', value: 'gif_funny' },
                { name: 'Meme', value: 'gif_meme' },
                { name: 'Movie', value: 'gif_movie' }
            )
    );

const action = () => {
    return async(interaction)=>{
        console.log(
            `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
        );
        console.log(interaction.options.getString('category'));
        await interaction.reply({ content: 'Pong!', ephemeral: true });
    }

};

module.exports = {
    command,
    action,
};
