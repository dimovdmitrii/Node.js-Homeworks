import { DateTime } from "luxon";

const now = DateTime.now();

console.log(now.toFormat("dd-MM-yyyy"));
console.log(now.toFormat("MMM-dd-yyyy"));
console.log(now.toFormat("dd"));
