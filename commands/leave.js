module.exports = {
	name: 'leave',
	description: 'forces bot out of voice channel',
	cooldown: 3,
	args: false,
	aliases: ['stop'],
	execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		let data = ops.active.get(message.guild.id);
		const channel = message.member.voice.channel;
		if(!channel) return message.reply('Pls join voice channel');
		if(!message.guild.me.voice.channel) return message.reply('I\'m not connected to a voice channel');
		message.guild.me.voice.channel.leave();
		data.dispatcher.destroy();
		data.dispatcher = 0;
		data.queue = [];
		ops.active.set(data);
	},
};