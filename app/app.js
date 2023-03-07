import express from 'express';
import morgan from 'morgan';
import { saveConfig } from './src/config/log.js';
import userRouter from "./src/router/user.js";
import threadRouter from "./src/router/thread.js";

const port = 8080;
const app = express();
const logger = morgan("dev", { stream: saveConfig });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use("/user", userRouter);
app.use("/thread", threadRouter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`${port}포트에서 서버가 실행되고 있습니다. ${"http://localhost"}:${port}`);
});