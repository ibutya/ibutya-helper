const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  async run({ message, client }) {
    const sent = await message.channel.send('Pinging...');
    const embed = new EmbedBuilder()
      .setTitle('Pong!')
      .addFields(
        { name: 'API Latency', value: `${Math.round(client.ws.ping)}ms`, inline: true },
        { name: 'Bot Latency', value: `${sent.createdTimestamp - message.createdTimestamp}ms`, inline: true }
      );
    sent.edit({ content: null, embeds: [embed] });
  }
}; 