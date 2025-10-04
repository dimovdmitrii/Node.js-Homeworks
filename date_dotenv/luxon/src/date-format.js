import { DateTime } from "luxon";

const now = DateTime.now();

console.log(now.toFormat("dd-MM-yyyy"));
console.log(now.toFormat("MMM-d-yy"));
console.log(now.toFormat("cccc"));
