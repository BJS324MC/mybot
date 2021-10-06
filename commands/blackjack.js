module.exports = {
	data: {
		name: "blackjack",
		description: "Play Blackjack against your friends!",
		options: [{
			name: "opponent1",
			description: "The first player you are going to play against",
			type: 9,
			required: true
		},
		{
			name: "opponent2",
			description: "The second player you are going to play against",
			type: 9,
			required: false
		},
		{
			name: "opponent3",
			description: "The third player you are going to play against",
			type: 9,
			required: false
		}]
	},
	async execute(interaction) {
		const players = interaction.options.data.map(a=>a.user).concat(interaction.user),
			deck = [],
			playerCount = players.length,
			hands = Array(playerCount).fill(0).map(a => []),
			rand = n => Math.floor(Math.random() * n),
			hit = n => hands[n].push(deck.splice(rand(deck.length), 1));

		for (let f of "♢♧♡♤") {
			for (let i = 2; i <= 10; i++) deck.push(i + f);
			for (let g of "JQKA") deck.push(g + f);
		}

		let turn = rand(playerCount),
			passes = 0;
		for (let i = 0; i < playerCount; i++) {
			hit(i);
			hit(i);
		};
		const embed = {
			color: 0x0bd440,
			title: "Blackjack",
			thumbnail: {
				url: "https://i.imgur.com/EgZyNgL.png"
			},
			fields: [
				{
					name: `${players[turn].username} 's turn!`,
					value: "Make your move!",
				},
				{
					name:"Game Info",
					value:`Dealer's hand: \`? A♧\` \n`
				},
				{
					name:"Game status",
					value:"Waiting to start..."
				}
			]
		};
		let row = {
			"type": 1,
			"components": [
				{
					type: 2,
					custom_id: 'hit',
					label: 'Hit',
					style: "PRIMARY",
					disabled: false
				},
				{
					type: 2,
					custom_id: 'stand',
					label: 'Stand',
					style: "PRIMARY",
					disabled: false
				},
				{
					type: 2,
					custom_id: 'split',
					label: 'Split',
					style: "SUCCESS",
					disabled: true
				},
				{
					type: 2,
					custom_id: 'surrender',
					label: 'Surrender',
					style: "DANGER",
					disabled: false
				},
				{
					type: 2,
					custom_id: 'cards',
					label: 'Check Cards',
					style: "SECONDARY",
					disabled: false
				},
			]
		};
		await interaction.reply({ embeds: [embed], components: [row] });
		const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON' });

		collector.on('collect', async i => {
			if (i.customId === "cards") {
				const embed2 = {
					color: 0x74eb34,
					title: "Your Cards",
					thumbnail: {
						url: "https://i.imgur.com/PN4OmYC.png"
					},
					description: hands[turn].join(",")
				};
				await i.reply({ embeds: [embed2], ephemeral: true });
			}
			else if (i.user.id === players[turn].id) {
				collector.resetTimer();
				const msg = i.message;
				switch (i.customId) {
					case "hit":
						hit(turn);
						break;
					case "stand":
						turn = (turn + 1) % playerCount;
						passes++;
						if (passes === playerCount) {
							collector.stop();
							row.components.forEach(button => button.disabled = true);
						};
						embed.fields[0] = {
							name: `${players[turn].username}'s turn!`,
							value: "Make your move!"
						}
						await msg.edit({ embeds: [embed], components: [row] });
						break;
				}
			} else {
				await i.reply({ content: `It's not your turn!`, ephemeral: true });
			}
		});
	},
};