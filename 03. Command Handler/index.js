const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.json');
const fs = require('fs')
const client = new Client({
    intents: 32767
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands");

["Command"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`[READY] ${client.user.tag} is ready`)
})

client.on('messageCreate', async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(PREFIX)) return;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, args)
})

process.on('unhandledRejection', err => {
  console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(TOKEN);
