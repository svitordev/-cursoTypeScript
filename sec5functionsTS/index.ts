//1 void - funções que n retorna nada
function withoutReturn(): void {
  console.log("Esta função não tem retorno!");
}
withoutReturn();

//2 Callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`;
}
function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função!");

  const greet = f(userName);
  console.log(greet);
}
preGreeting(greeting, "Vitor");
//
function sum(n: number, m: number): number {
  return n + m;
}
function preSum(f: (n: number, m: number) => number, n: number, m: number) {
  console.log("Preparando a função!");

  const greet = f(n, m);
  console.log(greet);
}
preSum(sum, 2, 5);
preSum(sum, 5, 5);

//3 Gereric functions
function firstElement<T>(arr: T[]): T {
  return arr[2];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "n", "d"]));
console.log(firstElement([1, "a", true]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}
const newObject = mergeObjects(
  { letra: "a", valor: 2, isso: true },
  { age: 5, prefLetra: "k", namora: false }
);
console.log(newObject);

//4 constrains
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber("5", "12"));

//5 especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
console.log(mergeArrays<number | string>([1, 2, 3], ["9", "4"]));

//6 Parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Vitor"));
console.log(modernGreeting("Vitor", "Senhor"));

//7 parametro default
function somaDefault(n: number, m = 10): number {
  return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 52));

//8 unknown = tem que fazer a verificação de tipo
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[2]);
  } else if (typeof x === "number") {
    console.log(`X é um número: ${x}`);
  }
}
doSomething([1, 2, 5]);
doSomething(4);

//9 tipo never == void
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}
// showErrorMessage("Algum erro!")

//10 Rest parameters
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(2, 5, 7, 1, 9));
console.log(sumAll(2, 1, 9));

//11 Destructuring em parâmetros
function showProductDetails({ name, price }: { name: string; price: number }) {
  return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 59.99 };
console.log(showProductDetails(shirt))
