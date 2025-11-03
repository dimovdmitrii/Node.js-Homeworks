// Task 1

// const sumEvenNumbers = (numbers: number[]): number => {
//   const evenNumbers = numbers.filter((el) => el % 2 === 0);
//   return evenNumbers.reduce((prev, el) => prev + el, 0);
// };
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

// Task 2

// interface StringToBooleanFunction {
//   (str: string): boolean;
// }

// const isContentString: StringToBooleanFunction = (str) => {
//   //   return str ? true : false;
// };
// console.log(isContentString("Hello world"));
// console.log(isContentString(""));

//Task 3

// type CompareStrings = { (str1: string, str2: string): boolean };

// const isSameStrings: CompareStrings = (str1, str2) => {
//   return str1 === str2;
// };
// console.log(isSameStrings("Hello", "Hello"));
// console.log(isSameStrings("Hello", "hello"));

// Task 4

// function getLastElement<T>(arr: T[]): T | undefined {
//   return arr[arr.length - 1];
// }

// console.log(getLastElement([1, 2, 3, 4, 5, 6, 7]));
// console.log(getLastElement(["task", "modem", "star"]));
// console.log(getLastElement([]));

// Task 5

function makeTriple<T>(obj1: T, obj2: T, obj3: T): T[] {
  return [obj1, obj2, obj3];
}

console.log(makeTriple(1, 2, 3));
