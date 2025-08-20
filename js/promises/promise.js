// crud with cli - callbacks

// flow: ask for operations - read, update,  create, delete. all operations are on db - folder db, file. db.txt that has [] in it

import readline from "readline";
import { readFile, writeFile } from "node:fs";
import { fileURLToPath } from 'url';

import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, './db/db.txt')


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let selection;
rl.question('operation is? ', (answer) => {
  selection = answer;
  switch (answer) {
    case "read":
      readFile(DB_PATH, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(`data: ${data}`);
      });
      break;
    case "create":
      readFile(DB_PATH, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        const db = JSON.parse(data)
        rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        rl.question("please insert valid json: ", (answer) => {
          const newObj = JSON.parse(answer)
          db.push(newObj)
          rl.close();
          writeFile(DB_PATH, JSON.stringify(db), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`done inserting`);
            }
          })
        })
      });
      break;
    default:
      break;
  }
  rl.close();
});
