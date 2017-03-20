//string
 let myName = 'luis';
 //myName = 28;

//number
 let myAge = 27;
 //myAge = 'Max';

 //boolean
 let hasHobbies = false;
 //hasHobbies = 1;

//assign types
let myRealAge : number;
myRealAge = 27;
// myRealAge

//array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
//hobbies = 100

//tuples
let address: [string, number] = ["superstreet", 99];

//enum
enum Color {
    Gray, //0
    Green = 100, //100
    Blue = 2 //2
}

let myColor: Color = Color.Blue;
console.log(myColor);


//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

//functions

function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void {
    console.log("Hello!");
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(10, 2));

//function types
let myMultiply: (a: number, b: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));


//objects
let userData: {name: string, age: number} = {
    name: "Luis",
    age: 24
};

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function(all: boolean) : number[] {
        return this.data;
    }
}

//complex = {}

//type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};


//union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

//check types
let finalValue = 30;
if(typeof finalValue == "number"){
    console.log("Final value is a number");
}
