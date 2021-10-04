module.exports = {
	data: {
		name:"generate",
		description:"Generates!",
		options:[]
	},
	async execute(interaction) {
		await interaction.reply('BOOM!');
	},
};