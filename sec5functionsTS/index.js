"use strict";
//1 void - funções que n retorna nada
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
//2 Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Vitor");
//
function sum(n, m) {
    return n + m;
}
function preSum(f, n, m) {
    console.log("Preparando a função!");
    const greet = f(n, m);
    console.log(greet);
}
preSum(sum, 2, 5);
preSum(sum, 5, 5);
//3 Gereric functions
function firstElement(arr) {
    return arr[2];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "n", "d"]));
console.log(firstElement([1, "a", true]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ letra: "a", valor: 2, isso: true }, { age: 5, prefLetra: "k", namora: false });
console.log(newObject);
//4 constrains
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber("5", "12"));
//5 especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["9", "4"]));
//6 Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Vitor"));
console.log(modernGreeting("Vitor", "Senhor"));
//7 parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 52));
//8 unknown = tem que fazer a verificação de tipo
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[2]);
    }
    else if (typeof x === "number") {
        console.log(`X é um número: ${x}`);
    }
}
doSomething([1, 2, 5]);
doSomething(4);
//9 tipo never == void
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro!")
//10 Rest parameters
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(2, 5, 7, 1, 9));
console.log(sumAll(2, 1, 9));
//11 Destructuring em parâmetros
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 59.99 };
console.log(showProductDetails(shirt));
