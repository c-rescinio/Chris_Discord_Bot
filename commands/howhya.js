module.exports = {
	name: 'howhya',
	description: 'Mikes contribution, can I get a howhya',
	aliases:['canIget', 'mike'],
	cooldown: 5,
	async execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		try{
			args = ['https://youtu.be/OxIctt56KhQ'];
			const commandFile = require('./play.js');
			commandFile.execute(message, args, Discord, commandName, fs, ytdl, client, ops);
		}
		catch(UnhandledPromiseRejectionWarning) {
			console.error(UnhandledPromiseRejectionWarning);
			return message.reply('pls join voice channel');
		}

	},
};