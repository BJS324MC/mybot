const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const names = require("./names.json")

const convert = arr => new SlashCommandBuilder().setName(arr[0]).setDescription(arr[1]).toJSON()

const commands = [];

for(let cmd of Object.entries(names))
  commands.push(convert(cmd))
const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);