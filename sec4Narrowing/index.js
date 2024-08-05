"use strict";

//1 type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realizar a soma!");
    }
}
sum("4", "8");
sum(4, 8);
sum("4", 8);
//2 check valor
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, define uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([5, 2, 3], "multiply");
//3 instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const vitor = new SuperUser("Vitor");
console.log(jhon);
console.log(vitor);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(vitor);
//4 Operador IN
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const boltz = new Dog("Boltz");
const pietra = new Dog("Pietra", "poodle|salsicha");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é um SRD `);
    }
}
showDogDetails(boltz);
showDogDetails(pietra);
function reviewUser(review) {
    if (!review) {
        console.log("Você não avaliou o produto");
        return;
    }
    console.log(`A nota que vc deu foi ${review}, obrigado!`);
}
reviewUser(3);
reviewUser(5);
reviewUser(false);
