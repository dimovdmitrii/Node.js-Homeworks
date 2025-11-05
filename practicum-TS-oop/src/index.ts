// Задание 1. Класс `Car` и его наследник `ElectricCar`
// 1. Создайте класс `Car`, который будет содержать свойства `make` (марка
// автомобиля) и `year` (год выпуска).
// 2. Добавьте метод `start()`, который выводит в консоль сообщение `"The car is
// starting"`.
// 3. Затем создайте класс-наследник `ElectricCar`, который добавит новое
// свойство `batteryLevel` (уровень заряда батареи).
// 4. Переопределите метод `start()`, чтобы он выводил сообщение `"The electric car
// is starting"`.
class Car {
  make: string;
  private _year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this._year = year;
  }
  start(): void {
    console.log("The car is starting");
  }
  get year(): number {
    return this._year;
  }
  set year(newYear) {
    if (typeof newYear !== "number") {
      throw new Error("newYear must be a number");
    }
    if (Number.isNaN(newYear)) {
      throw new Error("newYear cannot be NaN");
    }
    if (!Number.isFinite(newYear)) {
      throw new Error("newYear cannot be infinity");
    }
    if (newYear < 1885) {
      throw new Error("newYear can;t be less then 1885");
    }
    this._year = newYear;
  }
}

class ElectricCar extends Car {
  protected _batteryLevel: number;

  constructor(make: string, year: number, batteryLevel: number) {
    super(make, year);
    this._batteryLevel = batteryLevel;
  }
  start(): void {
    console.log("The electric car is starting");
  }
  get batteryLevel(): number {
    return this._batteryLevel;
  }
  set batteryLevel(newBatteryLevel: number) {
    if (typeof newBatteryLevel !== "number") {
      throw new Error("newBatteryLevel must be number");
    }
    if (newBatteryLevel < 0) {
      throw new Error("newBatteryLevel must be greather then 0");
    }
    if (Number.isNaN(newBatteryLevel)) {
      throw new Error("newBatteryLevel cannot be a NaN");
    }
    if (!Number.isFinite(newBatteryLevel)) {
      throw new Error("newBatteryLevel can't be the Infinity");
    }
    this._batteryLevel = newBatteryLevel;
  }
}

const electricCar1 = new ElectricCar("Toyota", 2021, 88);
const car1 = new Car("Tesla", 2020);
car1.year = 1900;
console.log(car1);
electricCar1.batteryLevel = 2;
console.log(electricCar1);
car1.start();
electricCar1.start();

class Book {
  title: string;
  author: String;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  describe(): string {
    console.log(`${this.title} ${this.author}`);
    return `${this.title} ${this.author}`;
  }
}

class Ebook extends Book {
  fileSize: number;
  constructor(title: string, author: string, fileSize: number) {
    super(title, author);
    this.fileSize = fileSize;
  }
  describe(): string {
    console.log(`${super.describe()} ${this.fileSize}`);
    return `${super.describe()} ${this.fileSize}`;
  }
}
const ebook1 = new Ebook("Harry Potter", "Esenin", 500);

ebook1.describe();
