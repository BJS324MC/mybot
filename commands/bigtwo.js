/**
 * @requires Players start with 3 diamonds. They can choose
 */

module.exports = {
	data: {
		name: "bigtwo",
		description: "Play Big Two against your friends!",
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
		const players = interaction.options.data.reduce((t, a) => a.name.startsWith("opponent") ? t.concat(a.user) : t, []).concat(interaction.user),
			deck = [],
			playerCount = players.length,
			hands = Array(playerCount).fill(0).map(a => []),
			rand = n => Math.floor(Math.random() * n),
			shuffle = arr => {
				for (let i = arr.length - 1; i > 0; i--) {
					const j = rand(i + 1);
					[arr[i], arr[j]] = [arr[j], arr[i]];
				}
				return arr
			},
			take = n => hands[n].push(deck.pop()),
			getInfo = (show = false) => {
				let results, res;
				if (show) {
					results = hands.slice(0, -1).map(deckTotal);
					res = deckTotal(hands[playerCount]);
					results = results.map(a => (res > 21 || (a > res && a <= 21)) ? "**WINNER!**" : a > 21 ? "**BUSTED!**" : a === res ? "**TIED!**" : "**LOSER!**");
				}
				let info = "",
					addIn = (p, deal = false) => {
						let m = show ? hands[p].join(" ")
							: ((deal ? hands[p][0]  + " " : "") + "? ".repeat(hands[p].length - (deal ? 1 : 0)));
						info += `<@${players[p].id}>'s hand${deal ? " (Dealer)" : ""}: \`${m}\`    ${show ? deal ? res > 21 ? "**BUSTED!**" : "" : results[p] : p === turn ? "__**PLAYING**__" : ""}\n`
					};
				addIn(playerCount, true);
				for (let i = 0; i < playerCount; i++) addIn(i);

				return info;
			};
		for (let f of "♢♧♡♤") {
			for (let i = 2; i <= 10; i++) deck.push(i + f);
			for (let g of "JQKA") deck.push(g + f);
		}
		shuffle(deck);

		let turn = 0;
		for (let i = 0; i < playerCount + 1; i++) {
			hit(i);
			hit(i);
		};
		const embed = {
			color: 0x0bd440,
			title: "Big Two",
			thumbnail: {
				url: "https://i.imgur.com/EgZyNgL.png"
			},
			fields: [
				{
					name: "Game Info",
					value: getInfo()
				},
				{
					name: "Game status",
					value: `Waiting for <@${players[turn].id}>...`
				}
			]
		};
		let row = {
			type: 1,
			components: [
				{
					type: 2,
					custom_id: 'cards',
					label: 'Check In',
					style: "PRIMARY",
					disabled: false
				},
			]
		},
			glob = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });

		const getCards = idx => {
			const hand = hands[idx],
				total = deckTotal(hand),
				isDealer = idx === playerCount + 1,
				embed = {
					color: 0x74eb34,
					title: "Your Cards",
					thumbnail: {
						url: "https://i.imgur.com/PN4OmYC.png"
					},
					description: "\`" + hand.join("\`\n\`") + `\`\n\n**Total**: \`${total}\``,
					footer: {
						text: "NOTE: Dismiss this message when no actions are available."
					}
				},
				row = {
					type: 1,
					components: [
						{
							type: 2,
							custom_id: 'hit',
							label: 'Hit',
							style: "PRIMARY",
							disabled: idx !== turn || total >= 21 || (isDealer && total >= 17)
						},
						{
							type: 2,
							custom_id: 'stand',
							label: 'Stand',
							style: "SECONDARY",
							disabled: idx !== turn || (isDealer && total < 17)
						},
					]
				};
			return [embed, row];
		}
		const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON' });

		collector.on('collect', async i => {
			if (i.message.reference === null ? i.message.id === glob.id : glob.id === i.message.reference.messageId) {
				switch (i.customId) {
					case "cards":
						const idx = players.findIndex(u => u.id === i.user.id);
						if (idx === -1) return await i.reply({ content: "You aren't playing in this game!", ephemeral: true });
						let [embed2, row2] = getCards(idx);
						await i.reply({ embeds: [embed2], components: [row2], ephemeral: true });
						break;
					case "hit":
						hit(turn);
						let [embed3, row3] = getCards(turn);
						embed.fields[0].value = getInfo();
						embed.fields[1].value = `<@${players[turn].id}> drew a card!`;
						await i.update({ embeds: [embed3], components: [row3] });
						await glob.edit({ embeds: [embed], components: [row] });
						break;
					case "stand":
						let prev = turn;
						turn = (turn + 1) % (playerCount + 1);
						if (prev === playerCount) {
							collector.stop();
							row.components.forEach(button => button.disabled = true);
							embed.fields = [
								{
									name: "Game Info",
									value: getInfo(true)
								},
								{
									name: "Game status",
									value: "Game ended."
								}
							]
						} else {
							embed.fields[0].value = getInfo();
							embed.fields[1].value = `Waiting for <@${players[turn].id}>...`;
						};
						let [embed4, row4] = getCards(prev);
						await i.update({ embeds: [embed4], components: [row4] });
						await glob.edit({ embeds: [embed], components: [row] });
						break;
				}
			}
		});
	},
};