"use strict";
//1 - arrays
//number[]
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
//string[]
const nomes = ["vitor", "maria"];
nomes.push("Vitoria");
console.log(nomes);
//outra sintaxe array antiga não muito usado mais
const nums = [100, 200];
nums.push(300);
console.log(nums);
const names = ["João", "Vitor"];
names.push("Francisco");
console.log(names);
// 3 any
// NÃO USAR
const arr1 = [1, "teste", true, [], { nome: "Vitor" }];
console.log(arr1);
//4 Tipo de parâmetros
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
function nome(name, idade) {
    console.log(`Meu nome é ${name} e tenho ${idade} anos`);
}
nome("Vitor", 23);
//5 Tipo de retorno
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Vitor"));
//6 Funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary);
}, 2000);
//7 Tipos de objetos
function passCoordinates(coord) {
    console.log(`X coordinates: ${coord.x} e Y coordinates: ${coord.y}`);
}
const objCoord = {
    x: 362,
    y: 52.5,
};
passCoordinates(objCoord);
//8 propriedades opcionais
function showNumbers(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    if (c) {
        console.log(`C: ${c}`);
    }
}
showNumbers(1, 2);
//9 validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá, ${firstName} ${lastName}, tudo bem ?`);
    }
    else {
        console.log(`Olá, ${firstName}, tudo bem ?`);
    }
}
advancedGreeting("Vitor", "Silva");
advancedGreeting("Vitor");
//10 union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("200");
//11 avançado de union type
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(true));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`O id é: ${id} `);
}
showId(1);
showId("2");
function showCoords(obj) {
    console.table(`x: ${obj.x} ,y: ${obj.y},z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 5,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Vitor", age: 23 };
console.log(somePerson);
// type personType = {
//   age: number
// }
//15 Literal types
let test;
test = "testando";
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// showDirection("top")
//16 non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
//17 Bigint
let n;
n = 1000n;
console.log(n);
console.log(n + 100n);
console.log(typeof n);
//18 Symbol
let SymbolA = Symbol("a");
let SymbolB = Symbol("a");
console.log(SymbolA == SymbolB);
console.log(SymbolA === SymbolB);
