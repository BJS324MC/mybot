const ytdl = require('ytdl-core');
module.exports = {
  data: {
    name: "ytdl",
    description: "A very convenient Youtube downloader.",
    options: [{
      name: "id",
      type: 3,
      description: "The id or the URL of the video to convert",
      required: true
    },
      {
        name: "format",
        type: 4,
        description: "The type of format to download as.",
        required:false,
        choices: [  
          {
            name: "Normal",
            value: 2
          },
          {
            name: "Video Only",
            value: 1
          },
          {
            name: "Audio Only",
            value: 0
          }]
      }]
  },
  async execute(interaction) {
    let input = interaction.options.data[0].value;
    if (ytdl.validateURL(input)) input = ytdl.getURLVideoID(input);
    else if(!ytdl.validateID(input)) return interaction.reply("You entered an invaild id or url.\nTry to find any typos found in your input.");
    
    await interaction.deferReply();
    const { author, title, description, thumbnails } = (await ytdl.getBasicInfo(`https://www.youtube.com/watch?v=${input}`)).videoDetails;
    await interaction.editReply({embeds:[{
      color: 0x0099ff,
	    title,
	    description:'Click on the title to download this video.',
	    url: `https://bjsyt.herokuapp.com/${input}/${interaction.options.data[1]?.value || 2}`,
	    author: {
	    	name: author.name,
	    	icon_url: author.thumbnails[0].url,
	    	url: author.channel_url,
    	},
    	thumbnail:{
    	  url:thumbnails[1].url
    	}
    }]});
  }
};