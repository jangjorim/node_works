const readline = require('readline'); //readline모듈을 불러온다

const rl = readline.createInterface({
    input: process.stdin, //표준입력
    output: process.stdout // 표준출력
  });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});