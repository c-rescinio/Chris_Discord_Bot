module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if(!args.length) {
			return message.channel.send(`You didnt provide any arguements, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguements: ${args}\nArguements length: ${args.length}`);
	},
};