const Discord = require('discord.js');

module.exports = {
	name: 'stream-info',
	aliases: ['stream', 'creators', 'creator-info' ],
	description: 'Display\'s ProjektPayne\'s stream info',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Paynebot Creator Info')
			.setDescription('Paynebot is developed by ProjektPayne & c-rescinio. For feature requests, message ProjektPayne#8192 or dabmaster710#5280 on discord')
			.setThumbnail('https://cdn.discordapp.com/avatars/305207769370198026/d1098a8a6362328504a8c27781f93295.png')
			.setImage('https://cdn.discordapp.com/avatars/206960013229424640/c2c16d5ac6570b40b8e074ed66a6aaaa.png')
			.addFields(
				{ name: 'ProjektPayne Stream info', value: 'https://www.twitch.tv/projektpayne' },
				{ name: 'c-rescinio Stream Info', value: 'N/A', inline: true }
			)
			.setTimestamp()
			.setFooter('Paynebot', 'https://cdn.discordapp.com/avatars/749424457319186433/bd711c8633fea78f9d3116e24c5e07df.png');
		message.channel.send(exampleEmbed);
	},
};