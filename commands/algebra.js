const {simplify, derivative, evaluate} = require('mathjs');
module.exports = {
    data: {
        name: "algebra",
        description: "A list of algebra commands for working with algebra.",
        options: [{
            "name": "simpify",
            "description": "Simplify an equation.",
            "type": 1,
            "options":[
                {
                    name:"equation",
                    description:"An equation as input. Example: 2x - (2 ^ 3) * x",
                    type:3,
                    required:true
                }
            ]
        }]
    },
    async execute(interaction) {
        const eq = interaction.options.data[0].options[0].value;

        await interaction.reply({embeds: [{
            color:0x0099dd,
            title:"Equation Simplifier",
            description:`To simplify the equation ${eq}`,
            fields:[
                {
                    name:"1. Simplify.",
                    value:simplify(eq).toString()
                }
            ]
        }]});
    },
};