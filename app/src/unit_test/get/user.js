import emptyQueryTest from "./empty_query.js";

export default async function getTest() {
    return [await emptyQueryTest()];
}