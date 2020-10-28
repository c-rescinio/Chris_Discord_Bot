module.exports = {
	name: 'clear',
	description: 'Deletes messages in channel. Must be between 1-99',
	args: true,
	execute(message, args) {
		if (message.member.hasPermission('MANAGE_MESSAGES')) {
			const amount = parseInt(args[0]) + 1;
			if (isNaN(amount)) {
				return message.reply('that doesn\'t seem to be a valid number.');
			}
			else if (amount <= 1 || amount > 100) {
				return message.reply('you need to input a number between 1 and 99.');
			}
			try {
				message.channel.bulkDelete(amount, true);
				message.reply('I\'ve deleted the heresy sir!');
			}
			catch(err) {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in this channel!');
			}
		}
		else {
			message.reply('You do not have the permissions required for that command!');
		}
	},
};