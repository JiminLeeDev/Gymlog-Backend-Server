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
            return res.send({ msg: "요청하신 데이터를 조회했습니다.", error, results, fields });
        } else {
            return res.status(400).send({ msg: "특정할 수 없는 종류의 에러가 발생했습니다.", error, results, fields });
        }
    });
});

router.post('/', (req, res) => {
    const id = req.body.id;
    const nickname = req.body.nickname;
    const password = req.body.password;
    const query = `INSERT INTO User(id, nickname, password) VALUES("${id}", "${nickname}", "${password}")`;

    db.query(query, function (error, results, fields) {
        if (!error) {
            return res.send({ msg: "요청하신 데이터를 삽입했습니다.", error, results, fields });
        } else {
            if (error.code === "ER_DUP_ENTRY") {
                return res.status(400).send({ msg: "고유 키 값은 중복될 수 없습니다.", error, results, fields });
            } else {
                return res.status(400).send({ msg: "특정할 수 없는 종류의 에러가 발생했습니다.", error, results, fields });
            }
        }
    });
});

router.put('/', (req, res) => {
    const id = req.body.id;
    const nickname = ["nickname", req.body.nickname];
    const password = ["password", req.body.password];
    const body_datas = [nickname, password];

    let query = "UPDATE User SET";

    body_datas.map((body_data) => query += body_data[1] ? ` ${body_data[0]} = "${body_data[1]}", ` : "");

    query = query.substring(0, query.length - 2) + `WHERE id = "${id}"`;

    db.query(query, function (error, results, fields) {
        if (!error) {
            if (results.affectedRows < 1) {
                return res.status(400).send({ msg: "요청하신 id에 해당하는 로우 값이 없습니다.", error, results, fields });
            } else {
                return res.send({ msg: "요청하신 데이터를 수정했습니다.", error, results, fields });
            }
        } else {
            return res.status(400).send({ msg: "특정할 수 없는 종류의 에러가 발생했습니다.", error, results, fields });
        }
    });
});

router.delete('/', (req, res) => {
    const id = req.body.id;

    const query = `DELETE FROM User WHERE id="${id}"`;

    db.query(query, function (error, results, fields) {
        if (!error) {
            if (results.affectedRows < 1) {
                return res.status(400).send({ msg: "요청하신 id에 해당하는 로우 값이 없습니다.", error, results, fields });
            } else {
                return res.send({ msg: "요청하신 데이터를 삭제했습니다.", error, results, fields });
            }
        } else {
            return res.status(400).send({ msg: "특정할 수 없는 종류의 에러가 발생했습니다.", error, results, fields });
        }
    });
});


export default router;