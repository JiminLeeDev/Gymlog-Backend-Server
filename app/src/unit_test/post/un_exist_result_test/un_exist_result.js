import request from "request";

export default async function unExistResultTest() {
    const unExistResultTestResult = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
                id: "",
                password: "",
                nickname: "",
            }
        }, (err, response, body) => {
            const test_name = "unExistResultTest";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "전달된 컬럼 값으로는 유효한 로우 값을 얻을 수 없었습니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return unExistResultTestResult;
}