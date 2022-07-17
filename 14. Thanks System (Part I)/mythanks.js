const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'mythanks',
    description: 'check your thanks',
    aliases: ['mythx'],
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]);
        let thanks = await db.get(`userthanks_${user.id}`)
        let thanksl = await db.get(`userthanks_${user.id}`)

        //Levels
        if(thanks > 0) thanks = "Level 0"
        if(thanks > 5) thanks = "Level 1"
        if(thanks > 10) thanks = "Level 2"
        if(thanks > 15) thanks = "Level 3"
        if(thanks > 20) thanks = "Level 4"
        if(thanks === null) thanks = "No Thanks"
        //You can add more.....

        //Embeds
        let embed = new MessageEmbed()
        .setAuthor(user.username || user.user.username)
        .setThumbnail(user.displayAvatarURL() || user.user.displayAvatarURL())
        .addField(`User Level`, `\`${thanks}\`` || `\`New\``)
        .addField(`User Total Thanks`, `\`${thanksl}\`` || `\`0\``)
        .setThumbnail()
        .setColor('DARKGREEN')
        .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send({ embeds: [embed] })

    }
}