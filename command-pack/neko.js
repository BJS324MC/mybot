const client = require('nekos.life');
const neko = new client();

const revertMap={
    "nekogif":"nekoGif",
    "foxgirl":"foxGirl",
    "catText":"cattext",
    "owoify":"OwOify",
    "8ball":"8Ball",
    "randomhentaigif":"randomHentaiGif",
    "nekogif":"nekoGif",
    "bj":"bJ",
    "girlsologif":"girlSoloGif",
    "girlsolo":"girlSolo",
    "pussywankgif":"pussyWankGif",
    "pussyart":"pussyArt",
    "holoero":"holoEro",
    "feetgif":"feetGif",
    "erofeet":"eroFeet",
    "erokitsune":"eroKitsune",
    "erokemonomimi":"eroKemonomimi",
    "eroneko":"eroNeko",
    "eroyuri":"eroYuri",
    "cumarts":"cumArts",
    "blowjob":"blowJob"
};

module.exports = {
	data: {
        name:"nekos",
        description:"I can't believe you have done this.",
        options: [
            {
                "name": "sfw",
                "description": "Safe for work commands.",
                "type": 2,
                "options": [
                    {
                        "name": "smug",
                        "description": "*Smug*",
                        "type": 1 
                    },
                    {
                        "name": "baka",
                        "description": "sussy",
                        "type": 1
                    },
                    {
                        "name": "tickle",
                        "description": "Tickling is fun!",
                        "type": 1
                    },
                    {
                        "name": "slap",
                        "description": "Slap someone!",
                        "type": 1
                    },
                    {
                        "name": "poke",
                        "description": "*poke*",
                        "type": 1
                    },
                    {
                        "name": "pat",
                        "description": "Gud boi",
                        "type": 1
                    },
                    {
                        "name": "neko",
                        "description": "Neko pics.",
                        "type": 1
                    },
                    {
                        "name": "nekogif",
                        "description": "Neko gifs.",
                        "type": 1
                    },
                    {
                        "name": "meow",
                        "description": "*cat sounds*",
                        "type": 1
                    },
                    {
                        "name": "lizard",
                        "description": "lizard sounds?",
                        "type": 1
                    },
                    {
                        "name": "kiss",
                        "description": "Nice kiss!",
                        "type": 1
                    },
                    {
                        "name": "hug",
                        "description": "Hugging is great.",
                        "type": 1
                    },
                    {
                        "name": "foxgirl",
                        "description": "im not a fox",
                        "type": 1
                    },
                    {
                        "name": "feed",
                        "description": "Feed some food!",
                        "type": 1
                    },
                    {
                        "name": "cuddle",
                        "description": "It's a nice cuddle y'know?",
                        "type": 1
                    },
                    {
                        "name": "kemonomimi",
                        "description": "Such species...",
                        "type": 1
                    },
                    {
                        "name": "holo",
                        "description": "wait what",
                        "type": 1
                    },
                    {
                        "name": "woof",
                        "description": "W O O F",
                        "type": 1
                    },
                    {
                        "name": "wallpaper",
                        "description": "Never a good enough wallpaper...",
                        "type": 1
                    },
                    {
                        "name": "goose",
                        "description": "***Q       U           A         C       K***",
                        "type": 1
                    },
                    {
                        "name": "gecg",
                        "description": "Also known as genetically engineered catgirl,they are made from...",
                        "type": 1
                    },
                    {
                        "name": "avatar",
                        "description": "Pick a new avatar already.",
                        "type": 1
                    },
                    {
                        "name": "waifu",
                        "description": "Don't take mine,please.",
                        "type": 1
                    },
                    {
                        "name": "why",
                        "description": "Asking the real question right now.",
                        "type": 1
                    }
                ]
            },
            {
                "name": "sfw2",
                "description": "The second page of safe at work commands.",
                "type": 2,
                "options":[
                    {
                        "name": "cattext",
                        "description": "A cat emoji.",
                        "type": 1
                    },
                    {
                        "name": "owoify",
                        "description": "owo ywur tuxt becwumes owo",
                        "type": 1,
                        "options":[
                            {
                                name:"text",
                                description:"tuxt yu wunt to be owo",
                                type:3,
                                required:true
                            }
                        ]
                    },
                    {
                        "name": "8ball",
                        "description": "The 8 ball,a ball that can answer every question.",
                        "type": 1,
                        "options":[
                            {
                                name:"question",
                                description:"Your question here,please.",
                                type:3,
                                required:true
                            }
                        ]
                    },
                    {
                        "name": "fact",
                        "description": "Fun fact: It's fun!",
                        "type": 1
                    },
                    {
                        "name": "spoiler",
                        "description": "Make sure you read every single manga,comics,movies and anime before you do this!",
                        "type": 1
                    }
                ]
            },
            {
                "name": "nsfw",
                "description": "Not safe for work commands.",
                "type": 2,
                "options": [
                    {
                        "name": "randomhentaigif",
                        "description": "hentai",
                        "type": 1
                    },
                    {
                        "name": "pussy",
                        "description": "sucks",
                        "type": 1
                    },
                    {
                        "name": "nekogif",
                        "description": "Neko.",
                        "type": 1
                    },
                    {
                        "name": "neko",
                        "description": "Neko.",
                        "type": 1
                    },
                    {
                        "name": "lesbian",
                        "description": "Do they exist?",
                        "type": 1
                    },
                    {
                        "name": "kuni",
                        "description": "A kunai? Nah",
                        "type": 1
                    },
                    {
                        "name": "cumsluts",
                        "description": "I hate this",
                        "type": 1
                    },
                    {
                        "name": "classic",
                        "description": "Classy stuff,i think",
                        "type": 1
                    },
                    {
                        "name": "boobs",
                        "description": "B o o b a",
                        "type": 1
                    },
                    {
                        "name": "bj",
                        "description": "No description,fuck off.",
                        "type": 1
                    },
                    {
                        "name": "anal",
                        "description": "analysing...",
                        "type": 1
                    },
                    {
                        "name": "yuri",
                        "description": "tarted",
                        "type": 1
                    },
                    {
                        "name": "trap",
                        "description": "I think you already fell for the joke",
                        "type": 1
                    },
                    {
                        "name": "tits",
                        "description": "just the smaller part of the boobs",
                        "type": 1
                    },
                    {
                        "name": "girlsologif",
                        "description": "girl solo?",
                        "type": 1
                    },
                    {
                        "name": "girlsolo",
                        "description": "why this?",
                        "type": 1
                    },
                    {
                        "name": "pussywankgif",
                        "description": "Stop wanking bitch",
                        "type": 1
                    },
                    {
                        "name": "pussyart",
                        "description": "art in a inverted direction",
                        "type": 1
                    },
                    {
                        "name": "kemonomimi",
                        "description": "So they are formed by cumming two dicks into one.",
                        "type": 1
                    },
                    {
                        "name": "kitsune",
                        "description": "A myth",
                        "type": 1
                    },
                    {
                        "name": "keta",
                        "description": "Stop it stop it stop it",
                        "type": 1
                    },
                    {
                        "name": "holo",
                        "description": "live",
                        "type": 1
                    },
                    {
                        "name": "holoero",
                        "description": "erotic shit?",
                        "type": 1
                    },
                    {
                        "name": "hentai",
                        "description": "this is what you came here for",
                        "type": 1
                    }
                ]
            },
            {
                "name": "nsfw2",
                "description": "The second page of not safe for work commands.",
                "type": 2,
                "options":[
                    {
                        "name": "futanari",
                        "description": "uplift and done",
                        "type": 1
                    },
                    {
                        "name": "femdom",
                        "description": "female queendom",
                        "type": 1
                    },
                    {
                        "name": "feetgif",
                        "description": "feet fetish,but why",
                        "type": 1
                    },
                    {
                        "name": "erofeet",
                        "description": "even worse",
                        "type": 1
                    },
                    {
                        "name": "feet",
                        "description": "step on me but actually dont",
                        "type": 1
                    },
                    {
                        "name": "ero",
                        "description": "I need to know what this is",
                        "type": 1
                    },
                    {
                        "name": "erokitsune",
                        "description": "kitsune ero,that's the same word",
                        "type": 1
                    },
                    {
                        "name": "erokemonomimi",
                        "description": "I give up",
                        "type": 1
                    },
                    {
                        "name": "eroneko",
                        "description": "neko ero,it rhymes",
                        "type": 1
                    },
                    {
                        "name": "eroyuri",
                        "description": "this doesnt rhyme",
                        "type": 1
                    },
                    {
                        "name": "cumarts",
                        "description": "hey look guys i painted cum",
                        "type": 1
                    },
                    {
                        "name": "blowjob",
                        "description": "pay 2 sex?",
                        "type": 1
                    },
                    {
                        "name": "spank",
                        "description": "just like your mom",
                        "type": 1
                    },
                    {
                        "name": "gasm",
                        "description": "GASM",
                        "type": 1
                    }
                ]
            }
        ]
    },
	async execute(interaction) {
        //await interaction.deferReply();
        const data=interaction.options.data[0],
        command=data.options[0];
        const result = await neko[data.name.replace("2","")][command.name in revertMap ? revertMap[command.name]:command.name](command.options && {text:command.options[0].value});
        if("cat" in result) await interaction.reply(result.cat);
        else if("why" in result) await interaction.reply("Here's a question: "+result.why);
        else if("fact" in result) await interaction.reply("Here's a fact: "+result.fact);
        else if("owo" in result) await interaction.reply(result.owo);
        else if("response" in result) await interaction.reply({
            embeds:[{
                color:0x05ff0f,
                title:"8 Ball",
                description:`**You asked**: ${command.options[0].value}\n**I answered**: ${result.response}`,
                image: {
                    url:result.url
                }
            }]
        });
		else await interaction.reply({
            embeds:[{
                color:0x05ff0f,
                image: result,
                footer:{
                    text:"Powered by nekos.life"
                }
            }]
        });
	},
};