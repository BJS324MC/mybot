module.exports = {
	data: {
        name:"waifu",
        description:"Generates waifus!",
        options:[]
    },
	async execute(interaction) {
		await interaction.reply({
            embeds:[{
                color:0x05ff0f,
                title:"Here ya go",
                image:{
                    url:`https://www.thiswaifudoesnotexist.net/example-${Math.floor(Math.random()*100000)}.jpg`
                }
            }]
        });
	},
};