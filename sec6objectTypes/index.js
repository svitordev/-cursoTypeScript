"use strict";
function showProductDetails({ name, price, isAvailable }) {
    console.log(`O nome do produto é ${name} e seu preço é R$${price}`);
    if (isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "short",
    price: 99.99,
    isAvailable: true,
};
showProductDetails(shirt);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 19,
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 30,
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.type);
//7 Read-only Array
let myArray = ["Maça", "Laranja", "Banana"];
myArray.forEach((item) => {
    console.log(`Fruta: ${item}`);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 22, 3, 5, 1125];
const anotherUser = ["Vitor", 22];
console.log(anotherUser);
//9 Tuplas com Read-only
function showNumber(numbers) {
    // numbers[0]=10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumber([2, 6]);
