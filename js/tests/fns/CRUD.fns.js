import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Support __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbFile = path.join(__dirname, '../db/player.txt');

function write(newData) {
    fs.writeFileSync(dbFile, JSON.stringify(newData))
}

export function read() {
    const data = fs.readFileSync(dbFile)
    try {
        return JSON.parse(data)
    } catch (error) {
        console.log(`error in read: `, error);
        throw error;
    }
}
export function create(newPlayer) {
    const userData = read();
    userData.push(newPlayer)
    write(userData)
}
export function update(updatedData) {
    const { id } = updatedData
    const data = read();
    let found = false;
    for (const userData of data) {
        if (userData.id === id) {
            found = true
            userData = { ...userData, ...updatedData }
        }
    }
    if (!found) {
        console.log(`no user found to update!`);
        return
    }
    console.log(`updated user`);
    return

}
export function deleteFn(id) {
    const data = read();
    const filterd = data.filter((data) => {
        return data.id !== id
    })
    write(filterd)
}