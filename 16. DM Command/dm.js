module.exports = {
    name: 'dm',
    description: 'send message to dms',
    options: [{
        name: 'user',
        description: 'Provide user to send dms',
        type: 'USER',
        required: true,
    },
    {
        name: 'message',
        description: 'Enter message you wanna send to user',
        type: 'STRING',
        required: true,
    }],

    run: async(client, interaction, guild, args) => {
        const user = guild.members.cache.get(args.get('user')?.value ?? interaction.user.id);
        const dm = interaction.options.getString('message')
        try {
            await user.send(dm)
        } catch (error) {
            return interaction.reply('The user you provided dms are close')
        }
        interaction.reply(`Successfully send dms to \`${user.displayName}\``)
    }
}