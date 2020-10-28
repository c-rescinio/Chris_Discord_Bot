module.exports = {
	name: 'listen',
	description: 'Pls make contribution, it only saves to two files one is under "!listen" the another "listen @mention"',
	async execute(message, args, Discord, command, fs) {
		const taggedUser = message.mentions.members.first();
		const taggedMem = message.mentions.users.first();
		if (message.member.voice.channel && !message.mentions.members.size) {

			const connection = await message.member.voice.channel.join();
			const audio = connection.receiver.createStream(message.author, { mode:'pcm' });
			audio.pipe(fs.createWriteStream('user_audio'));
			audio.on('end', ()=>{
				connection.disconnect();
			});

		}
		else if (taggedUser.voice != 0) {
			try{
				const connection = await taggedUser.voice.channel.join();
				const audio = connection.receiver.createStream(taggedMem.id, { mode:'pcm' });
				audio.pipe(fs.createWriteStream('ethan_audio'));
				console.log('here');
				audio.on('end', ()=>{
					connection.disconnect();
				});
			}
			catch(UnhandledPromiseRejectionWarning) {
				return message.reply('error mentioned user to be listened to not in any voice channel');
			}

		}
	},
};