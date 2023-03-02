import request from "request";

async function getTest() {
    const test_name = "getTest";

    const test_result = await new Promise((resolve, reject) => {
        request({
            uri: "http://localhost:8080/user", qs: {
                // id: "a",
                // nickname: "c",
                // password: "b"
            }
        }, (err, response, body) => {
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

    return test_result;
}

// async function insertTest() {
//     const test_name = "getTest";
//     const test_result = await fetch(`http://localhost:8080/user`, { method: "POST" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
//     const status = test_result.status;
//     const status_text = test_result.statusText;
//     const success = !test_result.status === 400;
//     const parsed_test_result = await test_result.json();
//     const msg = parsed_test_result.msg;

//     return { test_name, success, status, status_text, msg };
// }

// async function updateTest() {
//     const test_name = "getTest";
//     const test_result = await fetch(`http://localhost:8080/user`, { method: "PUT" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
//     const status = test_result.status;
//     const status_text = test_result.statusText;
//     const success = !test_result.status === 400;
//     const parsed_test_result = await test_result.json();
//     const msg = parsed_test_result.msg;

//     return { test_name, success, status, status_text, msg };
// }

// async function deleteTest() {
//     const test_name = "getTest";
//     const test_result = await fetch(`http://localhost:8080/user?error_test=1`, { method: "DELETE" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
//     const status = test_result.status;
//     const status_text = test_result.statusText;
//     const success = !test_result.status === 400;
//     const parsed_test_result = await test_result.json();
//     const msg = parsed_test_result.msg;

//     return { test_name, success, status, status_text, msg };
// }

// async function totalTest() {
//     return {
//         "getTest": await getTest(),
//         "insertTest": await insertTest(),
//         "updateTest": await updateTest(),
//         "deleteTest": await deleteTest(),
//     };
// }

getTest();

// export { getTest, insertTest, updateTest, deleteTest, totalTest };
export { getTest };