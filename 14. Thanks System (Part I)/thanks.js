const ms = require('ms')
const db = require('quick.db')

module.exports = {
    name: 'thanks',
    description: 'thanks a member',
    aliases: ['thx'],
    run: async(client, message, args) => {
        const timeout = 43200000; //12 hours
        let bump = await db.fetch(`cooldown_${message.author.id}`)
        if(bump !== null && timeout - (Date.now() - bump) > 0) {
            let time = ms(timeout - (date.now() - bump), {long : true})
            return message.channel.send(`**Your are on cooldown**\nTime left: \`${time}\` remaining`)
        }
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(`Please provide a user to thanks them`)
        if(user.id === message.author.id) return  message.channel.send(`You can't thanks yourself`)

        db.add(`userthanks_${user.id}`, 1)
        db.set(`cooldown_${message.author.id}`, Date.now())
        return message.channel.send(`${user.displayName}, You got a thanks from ${message.member.displayName}`)
    }
}