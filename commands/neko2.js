const fetch = require("../fetch.js");

module.exports = {
    data: {
        name: "neko2",
        description: "Ah shit here we go again.",
        options: [
            {
                name: "nsfw",
                type: 2,
                description: "Usual stuff.",
                options: [
                    {
                        "name": "ass",
                        "description": "Assking something here.",
                        "type": 1
                    },
                    {
                        "name": "pgif",
                        "description": "A porn gif, not very special.",
                        "type": 1
                    },
                    {
                        "name": "4k",
                        "description": "Get 8928p resolution for free!",
                        "type": 1
                    },
                    {
                        "name": "anal",
                        "description": "You have really bad taste.",
                        "type": 1
                    },
                    {
                        "name": "gonewild",
                        "description": "<REDACTED>",
                        "type": 1
                    },
                    {
                        "name": "thigh",
                        "description": "You have really good taste.",
                        "type": 1
                    },
                    {
                        "name": "boobs",
                        "description": "The most used command. Period.",
                        "type": 1
                    },
                    {
                        "name": "hass",
                        "description": "Usually really thicc ones.",
                        "type": 1
                    },
                    {
                        "name": "hmidriff",
                        "description": "Ah yes",
                        "type": 1
                    },
                    {
                        "name": "paizuri",
                        "description": "You have got to be kidding me.",
                        "type": 1
                    },
                    {
                        "name": "hentai",
                        "description": "Tai chi.",
                        "type": 1
                    },
                    {
                        "name": "holo",
                        "description": "I mentioned something like this.",
                        "type": 1
                    },
                    {
                        "name": "hneko",
                        "description": "Neck.",
                        "type": 1
                    },
                    {
                        "name": "hkitsune",
                        "description": "Only worse.",
                        "type": 1
                    },
                    {
                        "name": "kemonomimi",
                        "description": "mimimimimimimimiimimmimiimiimiimimimimimiimimi",
                        "type": 1
                    },
                    {
                        "name": "hanal",
                        "description": "oh god",
                        "type": 1
                    },
                    {
                        "name": "kanna",
                        "description": "Sounds like something...",
                        "type": 1
                    },
                    {
                        "name": "hthigh",
                        "description": "I like the other version.",
                        "type": 1
                    },
                    {
                        "name": "hboobs",
                        "description": "If boobs were replaced by ass...",
                        "type": 1
                    },
                    {
                        "name": "tentacle",
                        "description": "I have seen it, and I hated it even more.",
                        "type": 1
                    },
                    {
                        "name": "yaoi",
                        "description": "Gay cat girls.",
                        "type": 1
                    },
                ]
            },
            {
                name: "sfw",
                type: 2,
                description: "Now this is interesting.",
                options: [
                    {
                        "name": "neko",
                        "description": "nekonekonekonekonekonekoneko",
                        "type": 1
                    },
                    {
                        "name": "gah",
                        "description": "GAHH!",
                        "type": 1
                    },
                    {
                        "name": "coffee",
                        "description": "Have a coffee.",
                        "type": 1
                    },
                    {
                        "name": "food",
                        "description": "Best food in the world.",
                        "type": 1
                    },
                ]
            }
        ]
    },
    async execute(interaction) {
        await interaction.reply({
            embeds: [{
                color: 0x05ff0f,
                image: {
                    url: JSON.parse(await fetch(`https://nekobot.xyz/api/image?type=${interaction.options.data[0].options[0].name}`)).message
                },
                footer: {
                    text: "Powered by nekobot"
                }
            }]
        });
    },
};