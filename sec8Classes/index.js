"use strict";
// 1 campos em classe
class User {
}
const vitor = new User();
console.log(vitor);
vitor.name = "Vitor";
vitor.age = 23;
//2 constructor em classe
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const john = new NewUser("John", 30);
console.log(john);
//3 Campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const myCar = new Car("Carro");
console.log(myCar);
//4 Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
//5 Métodos em classes
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome do anão é ${this.name}`;
    }
}
const gimli = new Dwarf("Gimli");
console.log(gimli.showName());
console.log(gimli.name);
//6 This em classes
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`caminhão do modelo: ${this.model} com ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 500);
const scania = new Truck("Scania", 450);
volvo.showDetails();
scania.showDetails();
//7 Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const vitorSilva = new Person("Vitor", "Silva");
console.log(vitorSilva.fullName);
//8 Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log(`x inserido com sucesso!`);
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log(`y inserido com sucesso!`);
    }
    get getCoords() {
        return `x: ${this.x}, y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 20;
console.log(myCoords);
console.log(myCoords.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const post = new BlogPost("Implements");
console.log(post.itemTitle());
//10 override de métodos
class Base {
    someMethod() {
        console.log("Método da classe base");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Método da classe nova");
    }
}
const myObject = new Nova();
myObject.someMethod();
//11 Visibilidade: Public padrão
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
//12 Visibilidade: protected
class E {
    constructor() {
        this.x = 15;
    }
}
class F extends E {
    showX() {
        console.log(this.x);
    }
}
const fInstance = new F();
fInstance.showX();
//13 Visibilidade: private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const privateInstance = new PrivateClass();
// console.log(privateInstance.name);
console.log(privateInstance.showName());
// console.log(privateInstance.privateMethod());
console.log(privateInstance.showPrivateMethod());
//14 Static members
class StaticMembers {
    static staticMethod() {
        console.log("Método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//15 generic classes
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return this.first;
    }
}
const item = new Item("Primeiro", "segundo");
console.log(item.showFirst);
const item2 = new Item(10, 20);
console.log(item2.showFirst);
//16 parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
const newShirt = new ParameterProperties("Camiseta", 10, 50);
console.log(newShirt.name);
// console.log(newShirt.price);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
//17 Class Expressions
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new MyClass("Vitor");
console.log(pessoa);
//18 Abstract classes
class AbstractClass {
}
// const newOBJ = new AbstractClass(); //erro
class abstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
const newAbstract = new abstractExample('Vitor Silva');
newAbstract.showName();
//19 relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
