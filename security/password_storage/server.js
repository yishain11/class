import express from "express"
import bcrypt from "bcrypt"
import mysql2 from "mysql2/promise"


const server = express();
server.use(express.json());

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

server.post('/signup', async (req, res) => {
    const { password } = req.body
    try {
        const hash = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO creds(hash) VALUES(?)';
        await pool.query(query, [hash]);
        res.status(200).end("stored successfully")
    } catch (error) {
        console.log(`error\n`, error);
        res.status(500).end("err in storing hash")
    }
})

server.use(async (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        res.status(403).end("no password")
        return
    }
    const query = 'SELECT hash FROM creds WHERE id=1;';
    const [rows] = await pool.query(query);
    console.log(`rows: `, rows);
    const hash = rows[0].hash;
    const match = await bcrypt.compare(password, hash);
    if (match) {
        console.log(`password match! continue`);
        next()
    } else {
        res.status(403).end("wrond password")
    }
})

server.post('/query', async (req, res) => {
    const { firstName } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE firstName = ?', [firstName])
        res.status(200).json(rows).end();
    } catch (error) {
        console.log(`error\n`, error);
        res.status(500).end("err in running query")
    }
})


server.listen(4545, () => {
    console.log(`server on`);
})