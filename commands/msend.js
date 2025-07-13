const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'msend',
  async run({ message, args, ownerId, client }) {
    if (message.author.id !== ownerId) return message.reply('権限がありません。');
    if (args.length === 0) return message.reply('内容を入力してください。');
    let channel = message.channel;
    let content = args.join(' ');
    if (/^\d{17,19}$/.test(args[0])) {
      const ch = client.channels.cache.get(args[0]);
      if (ch && ch.isTextBased()) {
        channel = ch;
        content = args.slice(1).join(' ');
      }
    }
    if (!content) return message.reply('内容がありません。');
    const embed = new EmbedBuilder().setDescription(content.replace(/\\n/g, '\n'));
    channel.send({ embeds: [embed] });
  }
}; 