//WATCH EPISODE 6, FOR EXPLAINATION

if(command) {

    //USER PERMISSION
    if(!message.member.permissions.has(command.userPerms || [])) return message.channel.send(`You dont have \`${command.userPerms || []}\` permission`)

    //BOT PERMISSION
    if(!message.guild.me.permissions.has(command.clientPerms || [])) return message.channel.send(`I dont have \`${command.clientPerms || []}\` permission`)

  }