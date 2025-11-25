// Task1
function num1(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("First promise completed"), 2000)
  );
}
function num2(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Second promise completed"), 1500)
  );
}
function num3(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Third promise completed"), 1000)
  );
}

async function runAll(): Promise<void> {
  const responce1: string = await num1();
  console.log(responce1);

  const responce2: string = await num2();
  console.log(responce2);

  const responce3: string = await num3();
  console.log(responce3);
}
runAll();
// Task 2

function stringToUppercase(str: string): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(str.toUpperCase()), 500)
  );
}

async function stringProcessing(arr: string[]): Promise<void> {
  const promises: Promise<string>[] = arr.map((s) => stringToUppercase(s));
  const results: string[] = await Promise.all(promises);

  console.log(results);
}
stringProcessing(["Hello", "world", "development"]);

// Task 3

const a: Promise<string> = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 500)
);

const b: Promise<string> = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 1000)
);

const c: Promise<string> = new Promise((_, reject) =>
  setTimeout(() => reject("Promise rejected"), 800)
);

async function runParallel(): Promise<void> {
  try {
    const results1: string[] = await Promise.all([a, b, c]);
    console.log(results1);
  } catch (error) {
    console.log("error function ");
  }
}
runParallel();

//Task 4

function delay(ms: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Completed after ${ms}ms`), ms)
  );
}

async function runDelays(numbers: number[]): Promise<void> {
  const promises: Promise<string>[] = numbers.map((n) => delay(n));
  const result: string[] = await Promise.all(promises);

  console.log(result);
}
runDelays([200, 1000, 500, 750]);
