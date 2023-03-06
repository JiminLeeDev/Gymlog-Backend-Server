import emptyQueryTest from "./empty_query.js";
import unExistResult from "./unExistResult.js";

export default async function getTest() {
    return await [emptyQueryTest(), unExistResult()];
}