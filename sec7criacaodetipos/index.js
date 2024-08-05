"use strict";
//1 generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData("Teste"));
console.log(showData(1));
//2 constraints em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Marrom" };
console.log(showProductName(myObj));
const myCar = { name: "Carro", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = {
    name: "Caneta",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
//4 Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = { name: "John", age: 30, hasDriveLicense: true };
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
//6 typeof type operator
const UserName = "John";
const UserName2 = "Doe";
const newTruck = { km: 10000, kg: 5000, description: "Truck" };
function showKm(km) {
    console.log(`O caminhão percorreu ${km}km`);
}
showKm(newTruck.km);
const newCar = {
    km: 15000,
    kg: 2000,
    description: "Car",
};
showKm(newCar.km);
const someVar = 10;
const testing = "some text";
