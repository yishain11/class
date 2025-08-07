import Router from "express"
import express from "express"
import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export const router = Router()

router.use(express.static(join(__dirname, "../www/home/")))

router.get('/', async (req, res) => {
    const homePagePath = join(__dirname, "../www/home/home.html")
    const homePage = await (await readFile(homePagePath)).toString()
    res.send(homePage)
})


router.post("/data", async (req, res) => {
    const data = req.body;
    console.log(`got complaint: ${JSON.stringify(data)}`);
    // in actual project they will store it in db
    const wwwPath = join(__dirname, "../www", "gotData.html")
    const gotDataPage = await (await readFile(wwwPath)).toString()
    res.send(gotDataPage)
})