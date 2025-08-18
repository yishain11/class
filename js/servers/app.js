import { createServer } from 'node:http'

const PORT = 4545

const server = createServer((req, res) => {
    const { method, url } = req
    console.log(`method: ${method}`);
    console.log(`url: ${url}`);
    switch (method.toLocaleLowerCase()) {
        case "get":
            res.writeHead(200)
            res.end("thanks for get req!")
            return

        default:
            res.end("hi from server")
            return;
    }
})

server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
})