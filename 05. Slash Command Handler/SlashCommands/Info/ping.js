module.exports = {
    name: "ping",
    aliases: ["p"],
    run: async(client, interaction, guild,  args) => {
        interaction.followUp('pong!')
    }
}