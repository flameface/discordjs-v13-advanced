//WATCH EPISODE 7, FOR EXPLAINATION

if(command) {
    //OWNER ONLY
    if(command.ownerOnly) {
      if(!client.config.OWNERID.includes(message.author.id)) {
        message.channel.send(`${message.member} You can't access owner commands`)
        return;
      }
    } 
}