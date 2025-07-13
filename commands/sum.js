module.exports = {
  name: 'sum',
  async run({ message, args }) {
    if (!args[0]) return message.reply('式を入力してください。');
    let expr = args.join(' ').replace(/,/g, '');
    // log10対応
    expr = expr.replace(/log10\(([^)]+)\)/g, (m, v) => `Math.log10(${v})`);
    try {
      // 安全性のためMathのみ許可
      const result = Function('Math', `return ${expr}`)(Math);
      message.reply(`結果: ${result}`);
    } catch {
      message.reply('式が不正です。');
    }
  }
}; 