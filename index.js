// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Intents} = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const {token} = process.env;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands={};
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands[command.data.name] = command;
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
	if (interaction.isCommand()) {
		if(!(interaction.commandName in commands)) return;
		try{
			commands[interaction.commandName].execute(interaction);
		} catch(error){
			await interaction.reply({ content: 'I got an error executing this command!', ephemeral: true });
			console.error(error);
		}
	}
});

// Login to Discord with your client's token
client.login(token);