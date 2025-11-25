//TAsk 1
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    console.log("The dog barks");
  }
}
const dog = new Dog("Buddy", "dog", "Chiuaua");
console.log(dog);
console.log(dog.sound());

//Task2
class Library {
  static totalBooks: number = 0;

  constructor(title: string) {
    this.addBook(title);
  }

  private addBook(title: string): void {
    Library.totalBooks++;
  }

  infoBook(): void {
    console.log(`Now total count of the books: ${Library.totalBooks}`);
  }
}

const library1 = new Library("First book");
const library2 = new Library("Winnie the Pooh");
const library3 = new Library("HPMor");

library3.infoBook();

//Task 3

class Vehicle {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const Yamaha = new Motorcycle("Yamaha", "R1", "SportByke");
console.log(Yamaha);
