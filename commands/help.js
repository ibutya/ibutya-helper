const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  async run({ message }) {
    const embed = new EmbedBuilder()
      .setTitle('ヘルプ')
      .setDescription('コマンド一覧')
      .addFields(
        { name: ';;help', value: 'このヘルプを表示' },
        { name: ';;ping', value: '応答速度を表示' },
        { name: ';;num [数字]', value: '大きい数字をいい感じに変換' },
        { name: ';;sum [式]', value: '計算（四則演算・log10等対応）' },
        { name: ';;bgm [内容]', value: 'YouTubeからBGMを検索して送信' },
        { name: ';;ch-change [新チャンネル名]', value: '（ownerのみ）チャンネル名を変更' },
        { name: ';;send [チャンネルID] [内容]', value: '（ownerのみ）指定チャンネル/現チャンネルに内容送信' },
        { name: ';;msend [チャンネルID] [内容]', value: '（ownerのみ）指定チャンネル/現チャンネルにembed送信' },
        { name: ';;customs [内容]', value: '（ownerのみ）カスタムステータスを変更' },
        { name: ';;start-restart', value: '（ownerのみ）restart用のコードを起動' },
        { name: ';;exit', value: '（ownerのみ）botの再起動' }
      );
    message.channel.send({ embeds: [embed] });
  }
}; 