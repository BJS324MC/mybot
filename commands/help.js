module.exports = {
	data: {
        name:"help",
        description:"Get some help!",
        options:[]
    },
	async execute(interaction) {
		await interaction.reply("https://i.imgur.com/LkZ45Cg.gif");
	},
};