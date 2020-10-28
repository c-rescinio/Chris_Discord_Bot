module.exports = {
	name: 'hhhnnngggg',
	description: 'Voort mating call',
	cooldown: 8,
	aliases:['hng', 'hhnngg'],
	async execute(message, args, Discord, commandName, fs, ytdl, client, ops) {
		try{
			args = ['https://youtu.be/6QfD6higKBo'];
			const commandFile = require('./play.js');
			commandFile.execute(message, args, Discord, commandName, fs, ytdl, client, ops);
		}
		catch(UnhandledPromiseRejectionWarning) {
			console.error(UnhandledPromiseRejectionWarning);
			return message.reply('pls join voice channel');
		}
	},
};