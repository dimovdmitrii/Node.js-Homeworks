/////////////////////////////

type Admin = {
  name: string;
  permissions: string[];
};
type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Dimi",
  permissions: ["admin", "user", "root"],
  email: "dimi@gmail.com",
};
console.log(adminUser);

///////////////////////////////////

interface Engine {
  type: string;
  horsepower: number;
}

interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
}

const myCar: Car = {
  make: "Toyota",
  model: "Prius",
  engine: {
    type: "Hybrid",
    horsepower: 99,
  },
  year: 2020,
};

function printInfoCar(car: Car): void {
  const { make, model, engine, year } = car;
  console.log(
    `Make: ${make}, Model: ${model}, Engine: ${engine.type}, ${engine.horsepower} HP, ` +
      (year !== undefined ? ` Year: ${year}` : "")
  );
}
printInfoCar(myCar);

/////////////////////////////////

interface Product {
  name: string;
  price: number;
}
interface CalculateDiscount {
  (product: Product, discount: number): number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price * (1 - discount / 100);
}

const product: Product = { name: "Car", price: 25890 };
const newPrice = calculateDiscount(product, 20);

console.log(`New price: ${product.name}: ${newPrice}`);

///////////////////////////////////

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "Max", salary: 5000 },
  { name: "Dimi", salary: 6000 },
  { name: "Olya", salary: 6500 },
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}
console.log(getSalaries(employees));

//////////////////////////////////

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student1: Student = {
  firstName: "Dmiti",
  lastName: "Dimov",
  grade: 1,
};

function printInfoStudent(student: Student): void {
  const { firstName, lastName, grade } = student1;
  console.log(`Name: ${firstName} ${lastName}, Grade: ${grade}`);
}
printInfoStudent(student1);

/////////////////////////////////

interface ConcatStrings {
  (str1: string, str2: string): string;
}

function concatStrings(str1: string, str2: string): string {
  return str1 + str2;
}

console.log(concatStrings("Hello ", "world!"));
