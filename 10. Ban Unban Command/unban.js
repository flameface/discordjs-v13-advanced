const { MessageEmbed } = require('discord.js');
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
    name: 'unban',
    description: 'Unbans member which has been banned',
    aliases: ['ub'],
    clientPerms: ['BAN_MEMBERS', 'SEND_MESSAGES', 'EMBED_LINKS'],
    userPerms: ['BAN_MEMBERS'],
    run: async(client, message, args) => {
          try {
              const id = args[0];
              if(!rgx.test(id))
              return message.channel.send(`Please provide a valid user ID`)
              const bannedUsers = await message.guild.bans.fetch();
              const user = bannedUsers.get(id).user;
              if(!user)
              return message.channel.send(`Unable to find user, please check the provided ID valid`)
              let reason = args.slice(1).join(' ');
              if(!reason) reason = '`None`';
              if(!reason.length > 1024) reason = reason.slice(0, 1021) + '...';

              await message.guild.members.unban(user, reason)
              const embed = new MessageEmbed()
              .setTitle('Ban Member')
              .setDescription(`${user.tag} was successfully unbanned.`)
              .addField('Reason', `${reason}`)
              .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
              .setTimestamp()
              .setColor('GREEN');
              message.channel.send({ embeds: [embed] })

         } catch (err) {
             console.log(err)
         }
    }
}