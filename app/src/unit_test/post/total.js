import body_len_test from "./body_len_test/total.js";
import empty_body_test from "./empty_body_test/total.js";
import un_exist_result_test from "./un_exist_result_test/total.js";

export default async function postTest() {
    return [await body_len_test(), await empty_body_test(), await un_exist_result_test()];
}