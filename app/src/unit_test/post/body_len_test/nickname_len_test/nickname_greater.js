import request from "request";

export default async function passwordGreaterTest() {
    const nicknameGreaterTestResult = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", body: {
                id: "12345678",
                password: "123456789",
                nickname: "12345678901234567",
            }
        }, (err, response, body) => {
            const test_name = "bodyLenTest(nickname.length > 15)";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "nickname은 8글자에서 15글자 사이여야 합니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return nicknameGreaterTestResult;
}