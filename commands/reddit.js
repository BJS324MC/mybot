const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = {
	data: {
        name:"randreddit",
        description:"Gets a random post of a subreddit!",
        options:[{
            name:"subreddit",
            type:3,
            description:"The subreddit you want to get a random post from.",
            required:true
        }]
    },
	async execute(interaction) {
        const sub = interaction.options.data[0].value;
        const data = await (await fetch(`https://www.reddit.com/r/${sub}/new.json`)).json();
        const posts = data.data.children;
        const post = posts[Math.floor(posts.length * Math.random())].data;
        const embed = {
            color:0x00ee88,
            title : post.title,
            url : `https://reddit.com${post.permalink}`,
            description : post.selftext,
            footer : {
                text : `💬 ${post.num_comments}   |   ⬆️  ${post.score}  `
            }
        }
        if(embed.title.length > 256) embed.title = embed.title.slice(0,253) + "...";
        if ("url_overridden_by_dest" in post)embed.image = { url : post.url_overridden_by_dest };
        await interaction.reply({embeds:[embed]});
	},
};