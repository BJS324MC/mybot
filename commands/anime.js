module.exports = {
	data: {
        name:"anime",
        description:"Generates a random anime!",
        options:[{
            name:"randomness",
            type:4,
            description:"How random and messy the result should be. Must range between 3 and 20 (inclusive)",
            required:false
        }]
    },
	async execute(interaction) {
        let randomness=interaction.options.data[0]?.value || 10;
        if (randomness < 3 || randomness > 20) return await interaction.reply({content:"That's an invaild number! Try again by entering a number between 3 and 20."});
		await interaction.reply({
            embeds:[{
                color:0x05ff0f,
                title:"Here ya go",
                image:{
                    url:`https://thisanimedoesnotexist.ai/results/psi-${parseFloat(randomness/10).toFixed(1)}/seed${Math.floor(Math.random()*90000)+10000}.png`
                }
            }]
        });
	},
};