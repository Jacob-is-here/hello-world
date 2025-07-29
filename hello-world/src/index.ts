let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

function rendeer(age : number){
    console.log(age);
}

let user: [number , string]= [1 ,'Hello'];

enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log('Size:', mySize);

enum Color {
    Red = '#ff0000',
    Green = '#00ff00',
    Blue = '#0000ff'
}

interface Person {
    readonly id: number;
    name: string;
    age?: number; 
    greet(): void;
}

let employee: Person = {
    id: 1,
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

employee.greet();

type Point = {
    x: number;
    y: number;
}

let point: Point = { x: 10, y: 20 };

type Status = 'pending' | 'approved' | 'rejected';
let orderStatus: Status = 'pending';

type Draggable = {
    drag(): void;
}

type Resizable = {
    resize(): void;
}

type UIWidget = Draggable & Resizable;

class Animal {
    constructor(public name: string, private age: number) {}
    
    makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
    
    get animalAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number, public breed: string) {
        super(name, age);
    }
    
    makeSound(): void {
        console.log(`${this.name} barks!`);
    }
    
    wagTail(): void {
        console.log(`${this.name} wags tail`);
    }
}

let myDog = new Dog('Buddy', 3, 'Golden Retriever');
myDog.makeSound();
myDog.wagTail();

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

interface GenericBox<T> {
    value: T;
    getValue(): T;
}

class NumberBox implements GenericBox<number> {
    constructor(public value: number) {}
    
    getValue(): number {
        return this.value;
    }
}

let numbers: number[] = [1, 2, 3, 4, 5];
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
let newEmployee = { ...employee, department: 'IT' };

interface Company {
    name: string;
    address?: {
        street?: string;
        city?: string;
    }
}

let company: Company = { name: 'Tech Corp' };
let street = company.address?.street ?? 'Unknown street';
console.log('Street:', street);


type PartialPerson = Partial<Person>;
type PersonName = Pick<Person, 'name'>;
type PersonWithoutId = Omit<Person, 'id'>;

type Direction = 'up' | 'down' | 'left' | 'right';
function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move('up');

type IsString<T> = T extends string ? true : false;
type Test1 = IsString<string>; 
type Test2 = IsString<number>; 