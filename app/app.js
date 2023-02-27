import express from 'express'
import morgan from 'morgan'

const app = express()
const logger = morgan("dev")
const port = 8080

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(port, () => {
    console.log(`${port}포트에서 서버가 실행되고 있습니다. ${"http://localhost"}:${port}`)
})