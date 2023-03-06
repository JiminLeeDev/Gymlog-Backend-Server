import empty_body_test from "./empty_body.js";

export default async function passwordLenTest() {
    return [await id_len_test(), await password_len_test(), await empty_body_test()];
}