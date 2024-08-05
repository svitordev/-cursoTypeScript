//1 tipo de objeto para função com interface
interface ProductProps {
  name: string;
  price: number;
  isAvailable: boolean;
}
function showProductDetails({ name, price, isAvailable }: ProductProps) {
  console.log(`O nome do produto é ${name} e seu preço é R$${price}`);
  if (isAvailable) {
    console.log("O produto está disponível");
  }
}
const shirt: ProductProps = {
  name: "short",
  price: 99.99,
  isAvailable: true,
};
showProductDetails(shirt);

//2 propriedade opcional em interface
interface User {
  email: string;
  age: number;
  name?: string;
}

//3 read-only só leitura, n dar pra alterar o valor
interface Car {
  brand: string;
  readonly wheels: number;
}
const fusca: Car = {
  brand: "VW",
  wheels: 4,
};
console.log(fusca);

//4 index Signature
interface CoordObject {
  [index: string]: number;
}
let coords: CoordObject = {
  x: 19,
};
coords.y = 15;
console.log(coords);

//5 Extending Types
interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  superpowers: string[];
}
const matheus: Human = {
  name: "Matheus",
  age: 30,
};
console.log(matheus);
const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[1]);

//6 Intersection Types
interface Character {
  name: string;
}
interface Gun {
  type: string;
  caliber: number;
}
type HumanWithGun = Character & Gun;
const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};
console.log(arnold);
console.log(arnold.type);

//7 Read-only Array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"];
myArray.forEach((item) => {
  console.log(`Fruta: ${item}`);
});
myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});
console.log(myArray);

//8 Tuplas
type FiveNumbers = [number, number, number, number, number];
const myNumberArray:FiveNumbers = [1,22,3,5,1125]
//
type nameAndAge = [string, number]
const anotherUser:nameAndAge = ["Vitor", 22]
console.log(anotherUser)

//9 Tuplas com Read-only
function showNumber(numbers: readonly[number,number]){
  // numbers[0]=10
  console.log(numbers[0])
  console.log(numbers[1])
}
showNumber([2,6])