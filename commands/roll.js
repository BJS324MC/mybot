module.exports = {
	data: {
        name:"roll",
        description:"Rolls a dice!",
        options:[{
            name:"sides",
            description:"The number of sides the dice will have. Defaults to 6 sides.",
            type:10,
            required:false
        }]
    },
	async execute(interaction) {
        const sides = interaction.options.data.length > 0 
                     ? interaction.options.data[0].value
                     : 6;
        await interaction.reply(`You rolled the number ${Math.floor(Math.random() * sides)}!`);
	},
};