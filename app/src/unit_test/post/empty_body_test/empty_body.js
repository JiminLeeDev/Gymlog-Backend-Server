import request from "request";

export default async function emptyBodyTest() {
    const emptyBodyTest = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
                id: "",
                password: "",
                nickname: "",
            }
        }, (err, response, body) => {
            const test_name = "emptyBodyTest";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "id, password, nickname 모두 비워져있어선 안됩니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return emptyBodyTest;
}