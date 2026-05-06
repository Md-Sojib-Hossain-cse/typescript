//oop - class - object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making sound like ${this.sound}`);
//   }
// }

//parameter properties

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`${this.name} is making sound like ${this.sound}`);
  }
}

const dog = new Animal("Dogesh bhai", "dog", "ghew ghew");
const cat = new Animal("Cat bhai", "cat", "meaw meaw");

console.log(dog.name);
console.log(dog.species);
console.log(dog.sound);

console.log(cat.name);
console.log(cat.species);
console.log(cat.sound);
cat.makeSound();
