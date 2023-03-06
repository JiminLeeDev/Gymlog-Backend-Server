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
            const success = response.statusCode >= 200 && response.statusCode < 300;
            const msg = JSON.parse(body).msg;
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