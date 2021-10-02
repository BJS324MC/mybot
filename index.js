// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const {floor,random} = Math;

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	switch (interaction.commandName) {
        case 'ping':
		   await interaction.reply('No.');
           break;
	    case 'roll':
		   await interaction.reply(`You rolled the number ${floor(random()*6)}!`);
           break;
	    case 'generate':
		   await interaction.reply('Generated nothing.');
           break;
	}
});

// Login to Discord with your client's token
client.login(token);