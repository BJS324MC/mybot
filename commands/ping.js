module.exports = {
	data: {
        name:"ping",
        description:"Replies with Pong!",
        options:[]
    },
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};