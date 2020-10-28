module.exports = {
	name: 'volume',
	description: 'changes volume of current audio stream',
	cooldown: 3,
	args: true,
	aliases: ['v', 'set'],
	execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		const data = ops.active.get(message.guild.id);
		if (!message.guild.me.voice.channel) return message.channel.send('I aint even in a voice channel');
		if(args[0] > 2 || args[0] < 0) {
			message.channel.send('Nothing higher than 2 or less than 0');
		}
		else{
			data.dispatcher.setVolume(args[0]);
			message.channel.send('Volume changed');
		}
	},
};