import Router from "express"
import express from "express"
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export const router = Router()

router.use(express.static(join(__dirname, "../www/admin/")))

router.post('/', async (req, res) => {
    const { password } = req.body
    if (!password || password !== process.env.COMPLAINT_PASSWORD) {
        let unAuthPage = join(__dirname, "../www/403.html")
        unAuthPage = await (await readFile(unAuthPage)).toString()
        res.send(unAuthPage)
        return
    }
    const adminPagePath = join(__dirname, "../www/admin/admin.html")
    const adminPage = await (await readFile(adminPagePath)).toString()
    res.send(adminPage)
})