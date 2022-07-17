module.exports = {
    name: 'ping',
    description: 'ping',
    run: async(client, interaction, guild,  args) => {
        interaction.followUp('pong!')
    }
}
