async function getTest() {
    const test_name = "getTest";
    const test_result = await fetch(`http://localhost:8080/user?error_test=1`, { method: "GET" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
    const status = test_result.status;
    const status_text = test_result.statusText;
    const success = !test_result.status === 400;
    const parsed_test_result = await test_result.json();
    const msg = parsed_test_result.msg;

    return { test_name, success, status, status_text, msg };
}

async function insertTest() {
    const test_name = "getTest";
    const test_result = await fetch(`http://localhost:8080/user`, { method: "POST" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
    const status = test_result.status;
    const status_text = test_result.statusText;
    const success = !test_result.status === 400;
    const parsed_test_result = await test_result.json();
    const msg = parsed_test_result.msg;

    return { test_name, success, status, status_text, msg };
}

async function updateTest() {
    const test_name = "getTest";
    const test_result = await fetch(`http://localhost:8080/user`, { method: "PUT" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
    const status = test_result.status;
    const status_text = test_result.statusText;
    const success = !test_result.status === 400;
    const parsed_test_result = await test_result.json();
    const msg = parsed_test_result.msg;

    return { test_name, success, status, status_text, msg };
}

async function deleteTest() {
    const test_name = "getTest";
    const test_result = await fetch(`http://localhost:8080/user?error_test=1`, { method: "DELETE" }).then(fetch_result => fetch_result).catch(fetch_err => fetch_err);
    const status = test_result.status;
    const status_text = test_result.statusText;
    const success = !test_result.status === 400;
    const parsed_test_result = await test_result.json();
    const msg = parsed_test_result.msg;

    return { test_name, success, status, status_text, msg };
}

async function totalTest() {
    return {
        "getTest": await getTest(),
        "insertTest": await insertTest(),
        "updateTest": await updateTest(),
        "deleteTest": await deleteTest(),
    };
}

export { getTest, insertTest, updateTest, deleteTest, totalTest };