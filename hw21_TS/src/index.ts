//Task 1
abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}
class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [
  new Dog("Sharik"),
  new Dog("Rex"),
  new Cat("Garfield"),
  new Cat("Barsik"),
];
animals.forEach((animal) => {
  console.log(`${animal.name} : ${animal.makeSound()}`);
});
// Task 2

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShapes extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShapes {
  radius: number;
  color: string;
  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class ColoredRectangle extends ColoredShapes {
  width: number;
  height: number;
  color: string;
  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: ColoredShapes[] = [
  new ColoredCircle(9, "yellow"),
  new ColoredRectangle(6, 9, "black"),
];

shapes.forEach((shape) => {
  console.log(
    `Color: ${shape.color}, Area:  ${Math.ceil(shape.calculateArea())}`
  );
});

// Task 3

abstract class Appliance {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract turnOn(): string;
  abstract turnOff(): string;
}

class WashingMachine extends Appliance {
  turnOn(): string {
    return "WashingMachine is working";
  }
  turnOff(): string {
    return "WashinMachine finished";
  }
}
class Refrigerator extends Appliance {
  turnOn(): string {
    return "Refrigerator is working";
  }
  turnOff(): string {
    return "Refrigerator finished";
  }
}

const machines: Appliance[] = [
  new WashingMachine("Miele"),
  new Refrigerator("Liebherr"),
];
machines.forEach((machine) => {
  console.log(` ${machine.turnOff()};
  ${machine.turnOn()};`);
});

// Task 4

abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  balance: number = 0;
  percent: number = 0.08;
  deposit(amount: number): void {
    this.balance = (this.balance + amount) * (1 + this.percent);
    console.log(`After deposit: ${Math.ceil(this.balance)}`);
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`After withdraw ${Math.ceil(this.balance)}`);
    } else {
      console.log("Not enought money");
    }
  }
}

class CheckingAccount extends Account {
  balance: number = 0;
  comission: number = 2;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`After deposit: ${Math.ceil(this.balance)}`);
  }
  withdraw(amount: number): void {
    if (amount + this.comission <= this.balance) {
      this.balance -= amount + this.comission;
      console.log(`After withdraw: ${Math.ceil(this.balance)}`);
    } else {
      console.log("Not enought money");
    }
  }
}

const savings = new SavingsAccount();
savings.deposit(1000);
savings.deposit(1000);
savings.withdraw(300);
savings.withdraw(3000);

const checkings = new CheckingAccount();
checkings.deposit(300);
checkings.withdraw(200);
checkings.withdraw(200);

// Task 5
abstract class Media {
  abstract play(): void;
}
class Audio extends Media {
  play(): void {
    console.log("Playing audio");
  }
}
class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}
const medias: Media[] = [new Audio(), new Video()];

medias.forEach((media) => {
  media.play();
});
