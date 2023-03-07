import fs from "fs";
import path from "path";

const dir = path.resolve();
const fileName = "api.log";
const saveConfig = fs.createWriteStream(path.join(dir, fileName), { flags: 'a' });

export { saveConfig };