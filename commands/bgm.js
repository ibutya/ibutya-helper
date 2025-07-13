const ytsr = require('ytsr');

module.exports = {
  name: 'bgm',
  async run({ message, args }) {
    if (!args[0]) return message.reply('検索内容を入力してください。');
    const query = args.join(' ') + ' BGM';
    try {
      const res = await ytsr(query, { limit: 100 });
      const videos = res.items.filter(i => i.type === 'video');
      if (videos.length === 0) return message.reply('動画が見つかりませんでした。');
      const pick = videos[Math.floor(Math.random() * videos.length)];
      message.channel.send(pick.url);
    } catch (e) {
      message.reply('検索に失敗しました。');
    }
  }
}; 