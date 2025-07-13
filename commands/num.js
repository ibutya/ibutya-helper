const KANJI = [
  '', '万', '億', '兆', '京', '垓', '𥝱', '穣', '溝', '澗', '正', '載', '極', '恒河沙', '阿僧祇', '那由他', '不可思議', '無量大数', '不可説不可説転'
];

function formatBigNumber(num) {
  if (num < 10000) return num.toLocaleString();
  let str = '';
  let i = 0;
  while (num > 0 && i < KANJI.length) {
    const part = num % 10000;
    if (part > 0) str = part + (KANJI[i] || '') + str;
    num = Math.floor(num / 10000);
    i++;
  }
  if (num > 0) return `10^${(i-1)*4 + Math.floor(Math.log10(num)+1)}`;
  return str;
}

module.exports = {
  name: 'num',
  async run({ message, args }) {
    if (!args[0]) return message.reply('数字を入力してください。');
    const raw = args[0].replace(/,/g, '');
    if (!/^\d+$/.test(raw)) return message.reply('数字のみ対応しています。');
    const num = BigInt(raw);
    if (num < 10n ** 68n) {
      // 不可説不可説転まで
      let n = num;
      let str = '';
      let i = 0;
      while (n > 0n && i < KANJI.length) {
        const part = n % 10000n;
        if (part > 0n) str = part.toString() + (KANJI[i] || '') + str;
        n = n / 10000n;
        i++;
      }
      if (n > 0n) return message.reply(`10^${(i-1)*4 + n.toString().length}`);
      return message.reply(str);
    } else {
      // それ以上は指数表記
      return message.reply(`10^${raw.length-1}`);
    }
  }
}; 