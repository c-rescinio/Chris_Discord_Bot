module.exports = {
	name: 'cooper',
	description: 'Pic of Cooper',
	cooldown: 3,
	aliases: ['coop'],
	execute(message, args, Discord) {
		const file = new Discord.MessageAttachment('./emjoi.png');
		message.channel.send({ files:[file] });
	},
};