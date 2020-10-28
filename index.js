const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, forbiddenPhrases, acceptableUserID } = require('./config.json');
const cooldowns = new Discord.Collection();
const ytdl = require('ytdl-core');

const ownerID = '206960013229424640';
const active = new Map();

const ops = {
	ownerID: ownerID,
	active: active,
};

const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguements, ${message.author}!`);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try {
		command.execute(message, args, Discord, commandName, fs, ytdl, client, ops);
	}
	catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});


client.on('message', async message => {
	const wordArray = message.content.split(' ');
	for(let i = 0; i < forbiddenPhrases.length; i++) {

		if (wordArray.indexOf(forbiddenPhrases[i]) != -1) {

			if (acceptableUserID.indexOf(message.author.id) === -1) {
				console.log('Non-Payne has spoken');
				message.reply('Stop!');
			}
			else {
				console.log('Payne has spoken');
			}
		}
	}
});

let x = [];
let idArray = [305207769370198026];

const timer = setInterval(clearArrayFunction, 30000);

function clearArrayFunction() {
	x = [];
	idArray = [305207769370198026];

}
client.on('typingStart', async (Txtchannel, user)=>{
	if (idArray.indexOf(user.id) === -1) {
		const arraysize = idArray.length;
		idArray[arraysize] = user.id;
		x[arraysize] = 1;
		console.log('array added to by user: ' + user.id + '\nArray number:' + arraysize);
	}
	else {
		const userId = idArray.indexOf(user.id);
		x[userId]++;
		console.log('x: ' + x[userId] + ' by: ' + user.id);
		if (x[userId] === 3) {
			x[userId] = 0;
			Txtchannel.send('T-T-T-Today, Junior!');
		}
	}

});

client.login(token);

// https://discord.com/oauth2/authorize?++