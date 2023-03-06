import nicknameGreaterTest from "./nickname_greater.js";
import nicknameLessTest from "./nickname_less.js";

export default async function idLenTest() {
    return [await nicknameGreaterTest(), await nicknameLessTest()];
}