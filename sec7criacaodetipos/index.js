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
