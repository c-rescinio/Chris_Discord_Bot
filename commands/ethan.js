module.exports = {
	name: 'ethan',
	description: 'very loud, thank you Ethan',
	aliases: ['plsgodno', 'loud'],
	cooldown: 8,
	execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		const data = ops.active.get(message.guild.id) || [];
		const timeout = setTimeout(() => {
			volume();
			console.log('here');
		}, 1000);
		try{
			args = ['https://youtu.be/5iejK8yN6J8'];
			const commandFile = require('./play.js');
			commandFile.execute(message, args, Discord, commandName, fs, ytdl, client, ops);

		}
		catch(UnhandledPromiseRejectionWarning) {
			console.error(UnhandledPromiseRejectionWarning);
			return message.reply('pls join voice channel');
		}


		function volume() {
			clearTimeout(timeout);
			args[0] = 0.15;
			const volFile = require('./volume');
			volFile.execute(message, args, Discord, commandName, fs, ytdl, client, ops);
		}

	},
};
