require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const prefix = ';;';
const ownerId = process.env.owner;
client.commands = new Map();

// コマンドロード
const commandsPath = path.join(__dirname, 'commands');
fs.readdirSync(commandsPath).forEach(file => {
  if (file.endsWith('.js')) {
    const command = require(`./commands/${file}`);
    if (command.name && typeof command.run === 'function') {
      client.commands.set(command.name, command);
    }
  }
});

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしました。`);
});

client.on('messageCreate', async message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;
  try {
    await command.run({ client, message, args, ownerId });
  } catch (err) {
    console.error(err);
    message.reply('コマンド実行中にエラーが発生しました。');
  }
});

client.login(process.env.token);
