const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require("@discordjs/builders")
const { ApplicationCommandOptionType, ButtonStyle } = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'ping',
    options: [
        {
            name: 'message',
            description: 'send message',
            type: ApplicationCommandOptionType.String,
            require: true
        }
    ],
    run: async(client, interaction, guild,  args) => {
        const msg = interaction.options.getString('message')
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('Button')
            .setCustomId('button')
            .setStyle(ButtonStyle.Primary)
        )

        const row2 = new ActionRowBuilder()
        .addComponents(
            new SelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Nothing Selected')
            .addOptions(
                {
                    label: 'Select Me',
                    description: 'Select the button',
                    value: 'first_option',
                },
                {
                    label: 'Select Me2',
                    description: 'Select2 the button',
                    value: 'second_option',
                }
            )
        )
        const embed = new EmbedBuilder()
        .setTitle('Message')
        .setDescription(`${msg}`)
        interaction.followUp({
            embeds: [embed],
            components: [row, row2]
        })
    }
}