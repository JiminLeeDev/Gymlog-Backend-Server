import getTest from "./get/user.js";

export default async function totalTest() {
    return [await getTest(), await postTest()];
}
