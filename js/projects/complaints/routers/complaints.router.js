import Router from "express"
import express from "express"
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export const router = Router()

router.use(express.static(join(__dirname, "../www/complaints/")))

router.get('/', async (req, res) => {
    const complaintsPagePath = join(__dirname, "../www/complaints/complaints.html")
    const complaintsPage = await (await readFile(complaintsPagePath)).toString()
    res.send(complaintsPage)
})