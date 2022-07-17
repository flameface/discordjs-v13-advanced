const { Client, Collection } = require('discord.js');
const { TOKEN } = require('./config.json');
const fs = require('fs')

const client = new Client({
  intents: [
    "Guilds",
    "GuildMembers",
    "GuildBans",
    "GuildIntegrations",
    "GuildWebhooks",
    "GuildInvites",
    "GuildVoiceStates",
    "GuildPresences",
    "GuildMessages",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "DirectMessages",
    "DirectMessageReactions",
    "DirectMessageTyping"
  ],
});

client.slashCommands = new Collection() ;

module.exports = client;

["event", "slash"].forEach(handler => {
  require(`./structures/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`[READY] ${client.user.tag} is ready`)
})

process.on('unhandledRejection', err => {
  console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(TOKEN);

/*
DiscordJSv14 Advance Template
This is the latest discordjs v14 template by FLameQuard
Free to use for everyone..........

https://github.com/flamequard
*/