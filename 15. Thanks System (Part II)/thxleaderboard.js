const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "thxleaderboard",
    aliases: ['thxlb'],
    description: "Shows servers top 10 users of thanks",
    run: async(client, message, args) => {
        let thanks = db.all().filter(data => data.ID.startsWith(`userthanks_`)).sort((a, b) => b.data - a.data);

        //This will check weather there is data in thanks leaderboard otherwise the client will send this
        if(!thanks.length) {
            let noEmbed =  new MessageEmbed()
            .setTitle(message.member.displayName, message.author.displayAvatarURL())
            .setColor('GREEN')
            .setFooter("Nothing to see here yet")
            return message.channel.send({ embeds: [embed] })
        };

        //As you see this headace this is the interface of leaderboard where you will see top 10 users as i have mentioned thanks leaderboard length here, you can increase as per your wish

        thanks.length = 10;
        var finalLb = "";
        for (var i in thanks) {
            if(thanks[i].data === null) thanks[i].data = 0
            finalLb += `**${thanks.indexOf(thanks[i]) + 1}. ${client.users.cache.get(thanks[i].ID.split('_')[1]) ? client.users.cache.get(thanks[i].ID.split('_')[1]).tag : "Unknown User#0000"}** - \`${thanks[i].data} Thanks\`\n`;
        };

        const embed = new MessageEmbed()
        .setTitle(`Thanks Leaderboard of ${message.guild.name}`)
        .setColor("GREEN")
        .setDescription(finalLb)
        message.channel.send({ embeds: [embed] })
    }
}