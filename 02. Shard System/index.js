const { Client } = require('discord.js')
const { TOKEN } = require('./config.json')
const client = new Client({
    intents: [
        "GUILDS",
    ],
});

client.once('ready', () => {
  console.log(`[READY] ${client.user.tag} is ready`)
})

process.on('unhandledRejection', err => {
  console.log(`Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(TOKEN)
