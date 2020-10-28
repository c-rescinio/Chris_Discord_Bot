// const ytdl = require('ytdl-core');

const { join } = require('when');

module.exports = {
	name: 'play',
	description: 'Plays a video link from youtube',
	args: true,
	async execute(message, args, Discord, commandName, fs, ytdl, client, ops) {

		console.log(args[0]);
		let data = ops.active.get(message.guild.id) || {};
		if(!data.queue) data.queue = [];
		data.guildID = message.guild.id;

		if (!message.member.voice.channel) return message.reply('Pls join voice channel');
		const urlValid = await ytdl.validateURL(args[0]);
		if (!urlValid)	{
			return message.reply('Pls send youtube link only, keyword done by \'^search keyword\'');
		}

		const info = await ytdl.getInfo(args[0]);

		data.queue.push({
			songTitle: info.videoDetails.title,
			url: args[0],
		});
		data.taggedUser = message.mentions.members.first();
		if (!message.mentions.members.size) {
			data.connection = await message.member.voice.channel.join();
		}
		else if(data.taggedUser.voice != 0 && !message.guild.me.voice.channel) {
			data.connection = await data.taggedUser.voice.channel.join();
		}
		else{
			message.reply('I am in another voice channel or the tagged user is not in a voice channel');
		}
		if(!data.dispatcher) {
			play();
		}
		else{
			message.reply('added to the queue: ' + info.videoDetails.title);
		}


		async function play() {
			data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, { volume: 1 }, { filter: 'audioonly' }));
			data.dispatcher.guildID = data.guildID;
			ops.active.set(message.guild.id, data);
			message.reply('now playing: ' + data.queue[0].songTitle);

			data.dispatcher.on('finish', ()=> {
				finish();
			});

		}
		async function finish() {
			data.queue.shift();
			if(data.queue.length > 0) {
				ops.active.set(message.guild.id, data);
				play();
			}
			else {
				message.guild.me.voice.channel.leave();
				data.dispatcher.destroy();
				data.dispatcher = 0;
				ops.active.set(data);
			}
		}

	},
};