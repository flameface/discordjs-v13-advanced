const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.json');
const fs = require('fs')
const client = new Client({
    intents: 32767
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands");
client.events = new Collection();
client.slashCommands = new Collection();

module.exports = client;

["Command", "Event", "Slash"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`[READY] ${client.user.tag} is ready`)
})

process.on('unhandledRejection', err => {
  console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(TOKEN);
