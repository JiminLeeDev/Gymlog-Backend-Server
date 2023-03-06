import idGreaterTest from "./id_greater.js";
import idLessTest from "./id_less.js";

export default async function idLenTest() {
    return [await idGreaterTest(), await idLessTest()];
}