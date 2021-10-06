const wait = require('util').promisify(setTimeout);

module.exports = {
    data: {
        name: "roulette",
        description: "Russian Roulette at it's finest.",
        options: [{
            name: "opponent",
            description: "Who you are going to play against",
            type: 9,
            required: true
        }]
    },
    async execute(interaction) {
        const challenger = interaction.user;
        const opponent = interaction.options.data[0].user;
        let turn = Math.round(Math.random()),
            pointer = 0,
            tape = [0, 0, 0, 0, 0, 0];
        const getVal = (t, p) => t.map(a => a ? ":orange_circle:" : ":o:")
            .join(" ") + "\n" + (":black_large_square: ".repeat(p)) + ":small_red_triangle:" + (":black_large_square: ".repeat(5 - p));
        const rows = [
            {
                "type": 1,
                "components": [
                    {
                        type: 2,
                        custom_id: 'b1',
                        label: '1st',
                        style: "PRIMARY",
                        disabled: false
                    },
                    {
                        type: 2,
                        custom_id: 'b2',
                        label: '2nd',
                        style: "PRIMARY",
                        disabled: false
                    },
                    {
                        type: 2,
                        custom_id: 'b3',
                        label: '3rd',
                        style: "PRIMARY",
                        disabled: false
                    }
                ]
            },
            {
                "type": 1,
                "components": [
                    {
                        type: 2,
                        custom_id: 'b4',
                        label: '4th',
                        style: "PRIMARY",
                        disabled: false
                    },
                    {
                        type: 2,
                        custom_id: 'b5',
                        label: '5th',
                        style: "PRIMARY",
                        disabled: false
                    },
                    {
                        type: 2,
                        custom_id: 'b6',
                        label: '6th',
                        style: "PRIMARY",
                        disabled: false
                    }
                ]
            },
        ];
        const embed = {
            color: 0xf54254,
            title: "Russian Roulette",
            thumbnail: {
                url: "https://i.imgur.com/P69HEN2.png"
            },
            fields: [
                {
                    name: `${(turn ? challenger : opponent).username} 's turn!`,
                    value: `Pick a slot to fill for <@${(turn ? opponent : challenger).id}>!`,
                },
                {
                    name: "Slots",
                    value: getVal(tape, pointer)
                }
            ]
        }
        await interaction.reply({ embeds: [embed], components: rows });
        const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 30000 });
        const toggle = () => rows.forEach(
            row => row.components.forEach(
                button => button.disabled = !button.disabled
            )
        );

        collector.on('collect', async i => {
            if (i.customId.startsWith("b") && i.user.id === (turn ? challenger : opponent).id) {
                collector.resetTimer();
                toggle();
                tape = [0, 0, 0, 0, 0, 0];
                tape[i.customId[1] - 1] = 1;
                await i.deferUpdate();
                const msg = i.message;
                const r = Math.ceil(Math.random() * 10);
                for (let j = 0; j < r; j++) {
                    pointer = (pointer + 1) % 6;
                    embed.fields[1].value = getVal(tape, pointer) + "\nRotating...";
                    await msg.edit({ embeds: [embed], components: rows });
                    await wait(1000);
                }
                if (tape[pointer] === 1) {
                    embed.fields[0] = {
                        name: `${(turn ? challenger : opponent).username}'s the WINNER!`,
                        value: `<@${(turn ? opponent : challenger).id}> has fallen into their death!`
                    }
                    embed.fields[1].value = getVal(tape, pointer) + "\nTHE BULLET HITTED!";
                    collector.stop("win");
                } else {
                    turn = (turn + 1) % 2;
                    embed.fields[0] = {
                        name: `${(turn ? challenger : opponent).username}'s turn!`,
                        value: `Pick a slot to fill for <@${(turn ? opponent : challenger).id}>!`
                    }
                    embed.fields[1].value = getVal(tape, pointer) + "\nThe bullet missed!";
                    toggle();
                    collector.resetTimer();
                }
                await msg.edit({ embeds: [embed], components: rows });
            } else {
                await i.reply({ content: `It's not your turn!`, ephemeral: true });
            }
        });
        collector.on('end', async (collected,reason) => {
            if (reason === "win") return;
            await interaction.followUp(`Seems like <@${(turn ? challenger : opponent).id}> refused to continue! Ending the game...`);
            toggle();
            await interaction.editReply({ embeds: [embed], components: rows })
        })
    }
};