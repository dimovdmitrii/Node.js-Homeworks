function greetUser(name: string) {
  console.log(`Привет ${name}!`);
}
greetUser("Дмитрий");

interface Person {
  name: string;
  age: Number;
  city: String;
}

function printPersonInfo(person: Person) {
  const { name, age, city } = person;
  console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`);
}
const user1: Person = {
  name: "Dimi",
  age: 35,
  city: "Wien",
};

printPersonInfo(user1);

function squareNumber(num: number) {
  console.log(num * num);
}
squareNumber(5);

function isEven(num: number): boolean {
  return num % 2 === 0;
}
console.log(isEven(9));

interface Student {
  name: string;
  grade: number;
}
function printStudentInfo(student: Student) {
  const { name, grade } = student;
  console.log(`"Студент: ${name}, Оценка: ${grade}"`);
}
const student1: Student = {
  name: "Max",
  grade: 35,
};

printStudentInfo(student1);

function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello TypeScript!");
