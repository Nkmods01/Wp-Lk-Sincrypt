const child_process = require('child_process');

const zipFile = 'TheMain.zip';
const password = 'nkmodzzz1234567890@#$-$-#/Twbam';

const command = unzip -P ${password} ${zipFile};

child_process.exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(exec error: ${error});
    return;
  }
  console.log(stdout: ${stdout});
  console.error(stderr: ${stderr});
});