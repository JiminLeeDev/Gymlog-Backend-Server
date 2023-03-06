import request from "request";

export default async function passwordLessTest() {
    const passwordLessTestResult = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", body: {
                id: "12345678",
                password: "1234567",
                nickname: "123456789",
            }
        }, (err, response, body) => {
            const test_name = "bodyLenTest(password.length < 8)";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "password는 8글자에서 25글자 사이여야 합니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return passwordLessTestResult;
}