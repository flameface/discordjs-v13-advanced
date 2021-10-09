const slash = []
const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Slash Commands");
table.setHeading('SLASH COMMANDS', ' LOAD STATUS');

module.exports = (client) => {
    readdirSync('./SlashCommands/').forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
            if(pull.name) {
                client.slashCommands.set(pull.name, pull);
                table.addRow(file, 'SLASH COMMAND REGISTERED')
            } else {
                table.addRow(file, 'SLASH COMMAND UNREGISTERED')
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());

    client.on('ready', async () => {
        await client.application.commands.set(slash)
    })
}