const fetch = require('../fetch.js');
module.exports = {
	data: {
        name:"yearfact",
        description:"Get random facts of a year!",
        options:[{
            name:"year",
            type:4,
            description:"A year to search from.",
            required:true
        }]
    },
	async execute(interaction) {
        const year = interaction.options.data[0].value;
        const json = JSON.parse(await fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${year}`));
        console.log(json.source);
        await interaction.reply(JSON.stringify(json));
	},
};