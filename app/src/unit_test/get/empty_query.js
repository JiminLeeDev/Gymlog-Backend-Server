import request from "request";

export default async function emptyQueryTest() {
    const test_result = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
                id: "a",
                password: "b",
                nickname: "c",
            }
        }, (err, response, body) => {
            const test_name = "emptyQueryTest(unEmpty)";
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

    const test_result1 = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
            }
        }, (err, response, body) => {
            const test_name = "emptyQueryTest(empty)";
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


    return [test_result, test_result1];
}