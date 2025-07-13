const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'customs',
  async run({ message, args, ownerId, client }) {
    if (message.author.id !== ownerId) return message.reply('権限がありません。');
    const status = args.join(' ');
    if (!status) return message.reply('ステータス内容を入力してください。');
    try {
      await client.user.setPresence({ activities: [{ name: status }], status: 'online' });
      // 保存
      const jsonPath = path.join(__dirname, '../json/custom_status.json');
      fs.writeFileSync(jsonPath, JSON.stringify({ status }, null, 2));
      message.reply('カスタムステータスを変更し保存しました。');
    } catch (e) {
      message.reply('ステータス変更に失敗しました。');
    }
  }
}; 