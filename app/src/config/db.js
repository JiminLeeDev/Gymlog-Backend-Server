import mysql from 'mysql';
import dotenv from "dotenv";

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;
const connection = mysql.createConnection({ host: host, port: port, user: user, password: password, database: db_name });

connection.connect();

export default connection;