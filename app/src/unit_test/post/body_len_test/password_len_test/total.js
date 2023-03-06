import passwordGreaterTest from "./password_greater.js";
import passwordLessTest from "./password_less.js";

export default async function passwordLenTest() {
    return [await passwordGreaterTest(), await passwordLessTest()];
}