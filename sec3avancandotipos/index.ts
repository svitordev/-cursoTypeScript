//1 - arrays
//number[]
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers);

//string[]
const nomes: string[] = ["vitor", "maria"];
nomes.push("Vitoria");
console.log(nomes);

//outra sintaxe array antiga não muito usado mais
const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);
const names: Array<string> = ["João", "Vitor"];
names.push("Francisco");
console.log(names);

// 3 any
// NÃO USAR
const arr1: any = [1, "teste", true, [], { nome: "Vitor" }];
console.log(arr1);

//4 Tipo de parâmetros
function soma(a: number, b: number) {
  console.log(a + b);
}
soma(4, 5);
function nome(name: string, idade: number) {
  console.log(`Meu nome é ${name} e tenho ${idade} anos`);
}
nome("Vitor", 23);

//5 Tipo de retorno
function greeting(name: string): string {
  return `Olá ${name}`;
}
console.log(greeting("Vitor"));

//6 Funções anônimas
setTimeout(function () {
  const sallary: number = 1000;
  // console.log(parseFloat(sallary))
  // console.log(sallary);
}, 2000);

//7 Tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log(`X coordinates: ${coord.x} e Y coordinates: ${coord.y}`);
}
const objCoord = {
  x: 362,
  y: 52.5,
};
passCoordinates(objCoord);

//8 propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);
  if (c) {
    console.log(`C: ${c}`);
  }
}
showNumbers(1, 2);

//9 validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log(`Olá, ${firstName} ${lastName}, tudo bem ?`);
  } else {
    console.log(`Olá, ${firstName}, tudo bem ?`);
  }
}
advancedGreeting("Vitor", "Silva");
advancedGreeting("Vitor");

//10 union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("200");

//11 avançado de union type
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }
  return `A função do usuário é: ${role}`;
}
console.log(showUserRole(true));
console.log(showUserRole("admin"));

//12 type alias
type ID = string | number;
function showId(id: ID) {
  console.log(`O id é: ${id} `);
}
showId(1);
showId("2");

//13  Interfaces
interface PointProps {
  x: number;
  y: number;
  z: number;
}
function showCoords(obj: PointProps) {
  console.table(`x: ${obj.x} ,y: ${obj.y},z:${obj.z}`);
}
const coordObj:PointProps = {
  x:10,
  y:5,
  z:20
}
showCoords(coordObj)

//14 interfaces x typealias

//Interface é como var ou let e consegue implementar durante o código 
// typeAlias é como um const, não da pra implementar durante o código
interface Person{
  name: string
}
interface Person{
  age: number
}
const somePerson: Person={name:"Vitor",age:23}
console.log(somePerson)
//
type personType = {
  name: string
}
// type personType = {
//   age: number
// }

//15 Literal types
let test: "testando"
test= "testando"

function showDirection(direction: "left" | "right"|"center"){
  console.log(`A direção é: ${direction}`)
}
showDirection("left")
// showDirection("top")

//16 non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

//17 Bigint
let n: bigint
n = 1000n
console.log(n)
console.log(n + 100n)
console.log(typeof n)

//18 Symbol
let SymbolA: symbol = Symbol("a")
let SymbolB = Symbol("a")
console.log(SymbolA == SymbolB)
console.log(SymbolA === SymbolB)
