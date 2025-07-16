import express from "express"
import mysql from 'mysql2/promise';

const server = express();

server.use(express.json())

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    namedPlaceholders: true,
    multipleStatements: true, // <<< this is the key!
});


server.post('/name', async (req, res) => {
    const { firstName } = req.body
    try {
        // not safe
        const [result] = await connection.query(`SELECT * FROM users WHERE firstName='${firstName}';`);
        // safer
        // const [result] = await connection.execute(
        //     'SELECT * FROM users WHERE firstName = :firstName',
        //     { firstName }
        // );
        console.log(`result is: ${JSON.stringify(result)}`);
        res.json(result)
        return;

    } catch (error) {
        console.log(`error:`, error);
        res.status(500).end("done with error");
    }
})

server.listen(4545, () => {
    console.log(`server on`);
})