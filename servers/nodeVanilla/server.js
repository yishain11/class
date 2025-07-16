import { createServer } from "node:http"

const server = createServer((req, res) => {

    const { method, url } = req
    switch (method) {
        case "POST":
            let data = "";
            req.on('data', (chunk) => {
                data += chunk
            })

            req.on("end", () => {
                const body = JSON.parse(data)
                res.end(`got body: ${JSON.stringify(body)}`)
            })
            break;

        default:
            res.end("hi")
            break;
    }
})

server.listen(3434, () => {
    console.log(`vanilla node server listening`);
})