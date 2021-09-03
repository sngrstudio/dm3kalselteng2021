import { Handler } from '@netlify/functions'
import serverless from 'serverless-http'
import express from 'express'

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello Express + Functions + TS <3</h1>')
    res.end()
})

app.use('/.netlify/functions/server', router)

const handler:Handler = serverless(app)

export {app, handler}