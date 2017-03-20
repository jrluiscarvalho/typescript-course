//string
var myName = 'luis';
//myName = 28;
//number
var myAge = 27;
//myAge = 'Max';
//boolean
var hasHobbies = false;
//hasHobbies = 1;
//assign types
var myRealAge;
myRealAge = 27;
// myRealAge
//array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
//hobbies = 100
//tuples
var address = ["superstreet", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
//function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "Luis",
    age: 24
};
// userData = {
//     a: "Hello",
//     b: 22
// };
