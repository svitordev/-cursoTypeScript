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