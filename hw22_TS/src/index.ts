import { capitalize, reverseString } from "./stringUtils.js";
import { Finance } from "./finance.js";
import { UserManagement } from "./userManagement.js";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils.js";

console.log(capitalize("hello"));
console.log(reverseString("hello"));

const loan = new Finance.LoanCalculator(400000, 2, 35);
console.log(loan.calcMonthPayment());

const tax = new Finance.TaxCalculator(4000, 45);
console.log(tax.calcTax());

const manager1 = new UserManagement.Admin.AdminUser("Dimi", "dimi@gmail.com");
const manager2 = new UserManagement.Admin.AdminUser(
  "Dimi",
  "dimi@gmail.com",
  true
);
console.log(manager1, manager2);
console.log(generateFibonacci(34));
console.log(generatePrimeNumbers(53));
console.log(generatePrimeNumbers(0));
