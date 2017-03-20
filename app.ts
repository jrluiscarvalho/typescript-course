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
//let myMultiply;

