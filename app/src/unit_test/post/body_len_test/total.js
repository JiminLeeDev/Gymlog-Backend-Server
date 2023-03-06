import id_len_test from "./id_len_test/total.js";
import password_len_test from "./password_len_test/total.js";
import nickname_len_test from "./nickname_len_test/total.js";

export default async function bodyLenTest() {
    return [await id_len_test(), await password_len_test(), await nickname_len_test()];
}