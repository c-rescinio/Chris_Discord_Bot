module.exports = {
	name: 'gnomed',
	description: 'You have been gnomed!',
	cooldown: 6,
	aliases: ['gnome', 'rekted'],
	async execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		try{
			args = ['https://www.youtube.com/watch?v=6n3pFFPSlW4'];
			const commandFile = require('./play.js');
			commandFile.execute(message, args, Discord, commandName, fs, ytdl, client, ops);
		}
		catch(UnhandledPromiseRejectionWarning) {
			console.error(UnhandledPromiseRejectionWarning);
			return message.reply('pls join voice channel');
		}
	},
};