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
