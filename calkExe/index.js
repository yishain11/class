import chalk from 'chalk';


function colorLog(msg,color){
    switch(color){
        case 'red':
            console.log(chalk.red(msg));
            break;
            case 'green':
            console.log(chalk.green(msg));
            break;
            case 'yellow':
            console.log(chalk.yellow(msg));
            chalk.yellow(msg);
            break;
            case 'blue':
            console.log(chalk.blue(msg));
            break;
        default:
            console.log(msg);
            break; 
    }

}

const [msg, color] = process.argv.slice(2);
colorLog(msg,color) 
