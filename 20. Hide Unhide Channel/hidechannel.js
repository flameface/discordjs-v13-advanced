const { Client, CommandInteraction, Guild } = require("discord.js");

module.exports = {
    name: "hidechannel",
    description: 'hides the channel from everyone',
    botPermissions: ['VIEW_CHANNEL', 'MANAGE_CHANNELS'],
    userPermissions: ['MANAGE_GUILD'],
    options: [
        {
            name: 'channel',
            description: 'provide channel which you want to hide',
            type: 'CHANNEL',
            required: true,
        }
    ],
    /**
    * Function for receiving message.
    * @param {Client} client The instantiating client
    * @param {CommandInteraction} interaction The message that ran the command
    * @param {Guild} guild
    * @readonly
    */
    run: async (client, interaction, guild, args) => {
            const channel = guild.channels.cache.get(args.get('channel').value);
            if (!channel.viewable) {
                interaction.reply(`${client.emoji.wrong} The **${channel.name}** is already hidden from everyone`)
            } else {
                channel.permissionOverwrites.set([
                    {
                        id: guild.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                ]);
                interaction.reply(`The **${channel.name}** channel is now hidden from everyone`)
            }
    }
}
