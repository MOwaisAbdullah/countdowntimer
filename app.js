import inquirer from 'inquirer';
import chalk from 'chalk';
//import { clearInterval } from 'timers';
const user_reply = await inquirer.prompt([{
        name: 'time',
        type: 'number',
        message: 'Please input Seconds for Timer'
    }]);
const time = user_reply.time;
const target_time = new Date().getTime() + (time * (1000) + 2000); //adding 2 seconds to fill js script runing delay.....
//display Time
function displayTime(remainingTime) {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    console.log(chalk.cyan(`Time remaining: ${minutes.toString().padStart(2, '0')} Minute(s) and ${seconds.toString().padStart(2, '0')} Second(s)`));
}
////function to start timer
function timer() {
    const countDown = setInterval(() => {
        const current_time = new Date().getTime();
        const remainingTime = target_time - current_time;
        if (remainingTime <= 0) {
            console.log(chalk.magenta('********* Timer has Finished *********'));
            process.exit();
        }
        console.clear();
        displayTime(remainingTime); // this line is a calling function to show time in console..... 
    }, 1000);
}
timer();
