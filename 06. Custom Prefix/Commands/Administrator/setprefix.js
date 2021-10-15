const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name : 'setprefix',
    aliases : ['sp'],
    description : 'set prefix per server',
    run : async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send(`You dont have permission to use this command`)
        const newprefix = args[0]
        if(!newprefix) return message.channel.send(`Enter a valid prefix`)
        if(newprefix.length > 5) return message.channel.send(`Invalid prefix, The prefix you provided is greater that 5 digits/alphabates`)
        message.channel.send(`The prefix is been set to **${newprefix}**`)
        db.set(`prefix_${message.guild.id}`, newprefix)
    }
}