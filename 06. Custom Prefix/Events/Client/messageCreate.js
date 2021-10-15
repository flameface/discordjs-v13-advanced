const client = require('../../index.js');
const { PREFIX } = require('../../config.json');
const db = require('quick.db')

client.on('messageCreate', async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if(prefix == null) {
    prefix = PREFIX;
  } else {
    prefix = prefix
  }
  if(!message.content.startsWith(prefix)) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, args, prefix)
})