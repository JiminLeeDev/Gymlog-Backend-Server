import { Router } from 'express';
import db from "../config/db.js";

const router = Router();

router.get('/', (req, res) => {
    const id = ["id", req.query.id];
    const nickname = ["nickname", req.query.nickname];
    const password = ["password", req.query.password];
    const query_datas = [id, nickname, password];

    let where = "WHERE";

    query_datas.map((query_data) => where += query_data[1] ? ` ${query_data[0]}="${query_data[1]}" AND` : "");

    where = where === "WHERE" ? "" : where.substring(0, where.length - 4);

    const query = `SELECT * FROM User ${where}`;

    db.query(query, function (error, results, fields) {
        if (!error) {
            res.send({ msg: results });
        } else {
            res.status(400).send({ msg: error });
        }
    });
});

// router.post('/', (req, res) => {
//     if (!req.query.error_test) {
//         res.send({ msg: "The bird flies everytime." });
//     } else {
//         res.status(400).send({ msg: "The bird doesn't fly anymore." });
//     }
// });

// router.put('/', (req, res) => {
//     if (!req.query.error_test) {
//         res.send({ msg: "The bird flies everytime." });
//     } else {
//         res.status(400).send({ msg: "The bird doesn't fly anymore." });
//     }
// });

// router.delete('/', (req, res) => {
//     if (!req.query.error_test) {
//         res.send({ msg: "The bird flies everytime." });
//     } else {
//         res.status(400).send({ msg: "The bird doesn't fly anymore." });
//     }
// });


export default router;