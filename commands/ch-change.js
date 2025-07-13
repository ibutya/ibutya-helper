module.exports = {
  name: 'ch-change',
  async run({ message, args, ownerId }) {
    if (message.author.id !== ownerId) return message.reply('権限がありません。');
    const newName = args.join(' ');
    if (!newName) return message.reply('新しいチャンネル名を指定してください。');
    try {
      await message.channel.setName(newName);
      message.reply(`チャンネル名を「${newName}」に変更しました。`);
    } catch (e) {
      message.reply('チャンネル名の変更に失敗しました。');
    }
  }
}; 