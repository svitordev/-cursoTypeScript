//1 generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}
console.log(showData("Teste"));
console.log(showData(1));

//2 constraints em generics
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Marrom" };
console.log(showProductName(myObj));

//3 generics em interfaces
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}
type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;
const myCar: Car = { name: "Carro", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = {
  name: "Caneta",
  wheels: false,
  engine: false,
  color: "Azul",
};
console.log(myCar);
console.log(myPen);

//4 Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor ${obj[key]}`;
}
const server = {
  hd: "2TB",
  ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));

//5 keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };
type C = keyof Character;
function showCharName(obj: Character, key: C) {
  return `${obj[key]}`;
}
const myChar: Character = { name: "John", age: 30, hasDriveLicense: true };
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));

//6 typeof type operator
const UserName: string = "John";
const UserName2: typeof UserName = "Doe";
// const UserName3: typeof UserName = 14;
type x = typeof UserName;

//7 indexed access types
type Truck = { km: number; kg: number; description: string };
type TruckKm = Truck["km"];
const newTruck: Truck = { km: 10000, kg: 5000, description: "Truck" };
function showKm(km: TruckKm) {
  console.log(`O caminhão percorreu ${km}km`);
}
showKm(newTruck.km);
const newCar = {
  km: 15000,
  kg: 2000,
  description: "Car",
};
showKm(newCar.km);

//8 conditional Expressions type
interface A {}
interface B extends A {}
interface Teste {
  showName(): string;
}
type myType = B extends A ? number : string;
const someVar: myType = 10;
// const someVar2: myType = "10";
type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

//9 Template Literals Types
type testA = "text";
type CustomType = `some ${testA}`;
const testing: CustomType = "some text";

type a1 = "Testando A";
type a2 = "Testando B";
type a3 = `${a1}` | `${a2}`;
