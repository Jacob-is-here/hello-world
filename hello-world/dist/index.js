"use strict";
var _a, _b;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
function rendeer(age) {
    console.log(age);
}
let user = [1, 'Hello'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log('Size:', mySize);
var Color;
(function (Color) {
    Color["Red"] = "#ff0000";
    Color["Green"] = "#00ff00";
    Color["Blue"] = "#0000ff";
})(Color || (Color = {}));
let employee = {
    id: 1,
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
employee.greet();
let point = { x: 10, y: 20 };
let orderStatus = 'pending';
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
    get animalAge() {
        return this.age;
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} barks!`);
    }
    wagTail() {
        console.log(`${this.name} wags tail`);
    }
}
let myDog = new Dog('Buddy', 3, 'Golden Retriever');
myDog.makeSound();
myDog.wagTail();
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
class NumberBox {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Original:', numbers);
console.log('Doubled:', doubled);
console.log('Even numbers:', evenNumbers);
let [first, second, ...rest] = numbers;
console.log('First:', first, 'Second:', second, 'Rest:', rest);
let { name: employeeName, age: employeeAge } = employee;
console.log(`Name: ${employeeName}, Age: ${employeeAge}`);
let moreNumbers = [...numbers, 6, 7, 8];
let newEmployee = Object.assign(Object.assign({}, employee), { department: 'IT' });
let company = { name: 'Tech Corp' };
let street = (_b = (_a = company.address) === null || _a === void 0 ? void 0 : _a.street) !== null && _b !== void 0 ? _b : 'Unknown street';
console.log('Street:', street);
function move(direction) {
    console.log(`Moving ${direction}`);
}
move('up');
//# sourceMappingURL=index.js.map