module.exports = {
  name: 'exit',
  async run({ message, ownerId }) {
    if (message.author.id !== ownerId) return message.reply('権限がありません。');
    await message.reply('再起動します。');
    process.exit(0);
  }
}; 