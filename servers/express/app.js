import express from 'express'

const server = express();

server.use(express.json())

server.use((req, res, next) => {
    console.log(`ip: ${req.ip}`);
    // what happens if there is no next()?
    next();
})

server.get('/', (req, res) => {
    res.end("done get /")
})

server.get('/h', (req, res) => {
    res.end("done /h")
})

server.get("/cat", (req, res) => {
    const key = "live_Z1fzCkUUkfLUfQ19unIPWauMXUUa54eQF6TwsL4XmWMMCPd1DxUVgzC616nPEaNO"
    const url = "https://api.thecatapi.com/v1/images/search?limit=11"
    fetch(url, {
        headers: {
            "x-api-key": key
        }
    })
        .then(result => result.json())
        .then(result => {
            console.log(`result:`, result.length);
            res.end(`done /cat, length: ${result.length}`)
        })
        .catch(err => {
            console.log(`err: ${err.message}`);
        })
})

server.post('/action', (req, res) => {
    const body = req.body;
    console.log(`body`, body);
    res.end(`got body: ${JSON.stringify(body)}`)
})

server.listen(4545, () => {
    console.log(`listeing`);
})