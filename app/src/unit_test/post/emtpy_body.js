import request from "request";

export default async function emptyBodyTest() {
    const emptyBodyTestResult = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", body: {
                id: "",
                password: "",
                nickname: "",
            }
        }, (err, response, body) => {
            const test_name = "emptyBodyTest";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "id와 password nickname 모두 빠짐 없이 입력해주셔야 합니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return emptyBodyTestResult;
}