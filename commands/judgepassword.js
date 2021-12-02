const judge = require('zxcvbn');
module.exports = {
	data: {
        name:"judgepassword",
        description:"Judge a password by how crackable it is.",
        options:[{
            name:"password",
            type:3,
            description:"The password to judge",
            required:true
        }]
    },
	async execute(interaction) {
	  const password = interaction.options.data[0].value,
	        result = judge(password);
		await interaction.reply({embeds:[{
		  title:`${result.score}`
		}]});
	},
};