module.exports = {
	name: 'smol',
	description: 'Have you seen my peter smol',
	cooldown: 6,
	aliases: ['petersmol', 'peter'],
	async execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		try{
			args = ['https://youtu.be/B5CTwk7RkVY'];
			const commandFile = require('./play.js');
			commandFile.execute(message, args, Discord, commandName, fs, ytdl, client, ops);
		}
		catch(UnhandledPromiseRejectionWarning) {
			console.error(UnhandledPromiseRejectionWarning);
			return message.reply('pls join voice channel');
		}
	},
};