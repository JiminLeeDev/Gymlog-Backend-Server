import request from "request";

export default async function unExistResultTest() {
    const unExistResultTest = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
                id: "a",
                password: "b",
                nickname: "c",
            }
        }, (err, response, body) => {
            const test_name = "unExistResultTest";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "요청하신 컬럼 값에 해당하는 로우 값은 존재하지 않습니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return unExistResultTest;
}