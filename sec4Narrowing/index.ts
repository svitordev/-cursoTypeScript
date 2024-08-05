import { Type } from "lucide-react";

//1 type guard
function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel realizar a soma!");
  }
}
sum("4", "8");
sum(4, 8);
sum("4", 8);

//2 check valor
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }
  } else {
    console.log("Por favor, define uma operação");
  }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([5, 2, 3], "multiply");

//3 instanceof
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}
const jhon = new User("Jhon");
const vitor = new SuperUser("Vitor");
console.log(jhon);
console.log(vitor);
function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}`);
  }
}
userGreeting(jhon);
userGreeting(vitor);

//4 Operador IN
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const boltz = new Dog("Boltz");
const pietra = new Dog("Pietra", "poodle|salsicha");
function showDogDetails(dog: Dog) {
  if ("breed" in dog) {
    console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
  } else {
    console.log(`O cachorro é um SRD `);
  }
}
showDogDetails(boltz)
showDogDetails(pietra)

//teste
type Review = number | boolean
function reviewUser(review: Review) {
  if (!review){
   console.log("Você não avaliou o produto")
   return
  }
  console.log(`A nota que vc deu foi ${review}, obrigado!`) 
}
reviewUser(3)
reviewUser(5)
reviewUser(false)