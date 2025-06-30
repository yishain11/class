// crud with cli - callbacks

// flow: ask for operations - read, update,  create, delete. all operations are on db - folder db, file. db.txt that has [] in it

import readline from 'readline'
import {readFile, writeFile} from 'node:fs'
const PATH = "../db/db.txt"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('operation? ', (answer) => {
    switch (answer) {
        case "read":
            readFile()
            break;
    
        default:
            break;
    }
    rl.close();
});