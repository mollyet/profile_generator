const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q = [
  `
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  ✨ Welcome to the Super Cool Online Profile Generator 10,000! ✨

  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Answer some questions and our robot will compute the perfect online profile for you!

  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  To begin, enter your name: `, //0
  ` What is your favorite hobby? `, //1
  ` What is your favorite food? `, //2
  ` Share some personal lore! What is your quirky fact? `, //3
  ` What is your favorite colour? `, //4
  ` If you could go on a vacation right now, where would you go? `, //5
  ` Out of all the amazing skills you have, which one is your favorite? `, //6
  ` This is a tough one, but please choose your three favourite emojis: `, //7
  ` During the pandemic, we all tried new things. Which one was your favourite? `, //8
  ` Finally, what is your quest? ` //9
];
const a = [];

rl.question(`${q[0]}`, (answer) => {
  a.push(`${answer}`);
  rl.question(`${q[1]}`, (answer) => {
    a.push(`${answer}`);
    rl.question(`${q[2]}`, (answer) => {
      a.push(`${answer}`);
      rl.question(`${q[3]}`, (answer) => {
        a.push(`${answer}`);
        rl.question(`${q[4]}`, (answer) => {
          a.push(`${answer}`);
          rl.question(`${q[5]}`, (answer) => {
            a.push(`${answer}`);
            rl.question(`${q[6]}`, (answer) => {
              a.push(`${answer}`);
              rl.question(`${q[7]}`, (answer) => {
                a.push(`${answer}`);
                rl.question(`${q[8]}`, (answer) => {
                  a.push(`${answer}`);
                  rl.question(`${q[9]}`, (answer) => {
                    a.push(`${answer}`);
                    // 
                    const squiggle = `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`;
                    const bio = `
      I am really good at ${a[6]}, and my quirky fact is that  ${a[3]}. 
      However, few know that my quirkiest fact is that my favorite colour is ${a[4]}. 
      During the pandemic, I honed the obscure art of ${a[8]}. 
      After covid, you can find me in ${a[5]}, having a great time while ${a[1]}, and eating ${a[2]}.
      My quest is to ${a[9]}!`;
                    const person = `
      Name: ${a[0]} 
      Photo: ${a[7]}`;
                    console.log(squiggle);
                    console.log();
                    console.log(`✨ Thank you for our responses, please wait while our robot writes the perfect bio! ✨`);
                    console.log();
                    console.log(squiggle);
                    const spinner = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  "];
                    let delay = 100;
                    for (const stage of spinner) {
                      setTimeout(() => {
                        process.stdout.write(stage);
                      }, delay);
                      delay += 200;
                    };
                    setTimeout(() => {
                      console.log();
                      console.log(person);
                      console.log();
                      console.log(squiggle);
                      console.log();
                      console.log(bio);
                      console.log();
                      console.log(squiggle);
                    }, 3500);

                    //
                    rl.close();
                  });
                });
              });
            });
          });
        });;
      });
    });
  });
});