// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Intents} = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const shuffleString = str => {
	let arr = str.split('');
	for (let i = arr.length-1;i > 0;i--){
		const j = floor(random() * (i + 1));
		[arr[i],arr[j]] = [arr[j],arr[i]];
	}
	return arr.join('');
};

const commands={}
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
			console.error(error);
			await interaction.reply({ content: 'I got an error executing this command!', ephemeral: true });
		}
	}
	else if(interaction.isButton()){
		if(interaction.customId==="another"){
			await interaction.update({content:shuffleString("Generated nothing.")});
		}
	}
});

// Login to Discord with your client's token
client.login(token);