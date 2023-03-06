import request from "request";

export default async function emptyQueryTest() {
    const emptyQueryTestResult = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
                id: "",
                password: "",
                nickname: "",
            }
        }, (err, response, body) => {
            const test_name = "emptyQueryTest";
            const statusCode = response.statusCode;
            const status_text = response.statusMessage;
            const msg = JSON.parse(body).msg;
            const success = msg === "검색을 하기 위해 적어도 한 개 이상의 컬럼 값이 필요합니다.";
            const result = { test_name, success, statusCode, status_text, msg };

            if (!err) {
                resolve(result);
            } else {
                reject(result);
            }
        });
    });

    return emptyQueryTestResult;
}