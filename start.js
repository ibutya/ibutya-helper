const { spawn } = require('child_process');

function startBot() {
  const child = spawn('node', ['index.js'], {
    stdio: 'inherit',
    shell: true
  });

  child.on('close', (code) => {
    console.log(`index.js exited with code ${code}。再起動します...`);
    setTimeout(startBot, 1000); // 1秒待って再起動
  });
}

startBot();
