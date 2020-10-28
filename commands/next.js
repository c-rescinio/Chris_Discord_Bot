module.exports = {
	name: 'next',
	description: 'shifts the queue over one',
	cooldown: 3,
	args: false,
	aliases: ['n', 'shift', 'skip'],
	execute(message, args, Discord, commandName, fs, ytdl, client, ops) {

		const data = ops.active.get(message.guild.id);
		if (!data.queue) return message.reply('There is no queue');
		if(message.member.voice.channel != message.guild.me.voice.channel) return message.reply('you are not currently uasing the bot');
		data.dispatcher.emit('finish');
	},
};