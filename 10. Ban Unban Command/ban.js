const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban',
    usage: 'ban <user mention/ID> [reason]',
    description: 'Ban a member from your server',
    clientPerms: ['BAN_MEMBERS', 'SEND_MESSAGES', 'EMBED_LINKS'],
    userPerms: ['BAN_MEMBERS'],
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member)
        return message.channel.send(`Please mention a user or provide a valid user ID`)
        if(member === message.member)
        return message.channel.send(`You cannot ban yourself`)
        if(member.roles.highest.position >= message.member.roles.highest.position)
        return message.channel.send(`You cannot ban someone with an equal or higher role`)
        if(!member.bannable)
        return message.channel.send(`Provided member is not bannable`);
        let reason = args.slice(1).join(' ');
        if(!reason) reason = '`None`';
        if(reason.length > 1024) reason = reason.slice(0, 1021) + '...';
        await member.ban({ reason: reason });
        const embed = new MessageEmbed()
        .setTitle('Ban Member')
        .setDescription(`${member} was successfully banned.`)
        .addField('Reason', `${reason}`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('GREEN');
        message.channel.send({ embeds: [embed] })
    }
}