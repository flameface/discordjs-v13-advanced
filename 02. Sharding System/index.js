const { Client } = require('discord.js')
require('dotenv').config()
const client = new Client({
    intents: [
        "GUILDS",
    ],
});

client.once('ready', () => {
  console.log(`${client.user.tag} is ready`)
})

client.token = process.env.DISCORD_TOKEN

process.on('unhandledRejection', err => {
  console.log(`Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(client.token)
