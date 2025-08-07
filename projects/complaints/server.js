import express from "express"
const { SERVER_PORT } = process.env;
import { router as homeRouter } from "./routers/home.router.js"
import { router as complaintsRouter } from "./routers/complaints.router.js"
import { router as AdminRouter } from "./routers/admin.router.js"


const server = express()
server.use(express.json())
server.use((req, res, next) => {
    console.log(`got req: method: ${req.method}, url: ${req.url}`);
    next()
})
server.use(express.urlencoded({ extended: true }));
server.use('/complaints', complaintsRouter)
server.use('/admin', AdminRouter)
server.use('/', homeRouter)

server.listen(SERVER_PORT, () => {
    console.log(`listening on PORT ${SERVER_PORT}`);
})