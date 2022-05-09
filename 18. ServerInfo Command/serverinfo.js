const { stripIndent } = require('common-tags');
const { MessageEmbed, Client, CommandInteraction, Guild } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'Fetch servers information',
  /**
  *
  * @param {Client} client
  * @param {CommandInteraction} interaction
  * @param {Guild} guild
  * @param {String[]} args
  */
  run: async (client, interaction, guild, args) => {
    const User = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;
    const Text = guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size;
    const Voice = guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size;
    const Category = guild.channels.cache.filter(channel => channel.type === 'GUILD_CATEGORY').size;
    const Stage = guild.channels.cache.filter(channel => channel.type === 'GUILD_STAGE_VOICE').size;
    const Channel = Text + Voice + Category + Stage
    const Emoji = guild.emojis.cache.size;
    const Roles = guild.roles.cache.size;

    let embed = new MessageEmbed()
      .setAuthor({ name: guild.name, iconURL: guild.iconURL() })
      .setColor(guild.me.displayHexColor)
      .setDescription(stripIndent`
      **Name** : ${guild.name}
      **Server ID** : ${guild.id}
      **Owner** : ${await guild.fetchOwner().then(m => m.user.tag)}
      **Total Members** : ${guild.memberCount} [${User} Users | ${Bots} Bots]
      **Total Emojis** : ${Emoji}
      **Total Roles** : ${Roles}
      **Total Channels** : ${Channel} [${Text} Text | ${Voice} Voice | ${Category} Category | ${Stage} Stage]
      **Server Creation Date** : <t:${time}>
      `)
      .setThumbnail(guild.iconURL())

    await interaction.reply({
      embeds: [embed]
    })
  }
}
