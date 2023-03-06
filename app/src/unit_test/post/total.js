import body_len_test from "./body_len_test/total.js";

export default async function postTest() {
    return [await body_len_test()];
}