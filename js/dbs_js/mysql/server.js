import express from "express"
import mysql from 'mysql2/promise';

const server = express()
server.use(express.json())
const PORT = 4545

server.post('/query', async (req, res) => {
    const queryBody = req.body
    let query = ''
    for (const key in queryBody) {
        if (Object.prototype.hasOwnProperty.call(queryBody, key)) {
            const element = queryBody[key];
            query += `${key}='${element}'`
        }
    }
    console.log(`query: ${query}`);
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'classicmodels',
    });
    try {
        const dbQuery = `SELECT * FROM customers WHERE ${query}`
        console.log(`dbquery: ${dbQuery}`);
        const [results] = await connection.query(dbQuery);

        console.log(results); // results contains rows returned by server
        res.end(JSON.stringify({ results }))

    } catch (err) {
        console.log(err);
        res.status(400).end("hi")
    }
    res.end("hi")
})

server.listen(PORT, () => {
    console.log(`listening`);
})