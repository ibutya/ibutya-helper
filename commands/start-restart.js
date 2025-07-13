const { spawn } = require('child_process');

module.exports = {
  name: 'start-restart',
  async run({ message, ownerId }) {
    if (message.author.id !== ownerId) return message.reply('権限がありません。');
    const dir = '/Users/hinemasaki/Desktop/restart';
    const child = spawn('node', ['automine.js'], {
      cwd: dir,
      detached: true,
      stdio: 'ignore',
      shell: true
    });
    child.unref();
    message.reply('automine.jsをバックグラウンドで起動しました。');
  }
}; 