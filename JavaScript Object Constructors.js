
// JavaScript Object Constructors

function Details(fName, lName, age, nationality ){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.nationality = nationality;
    this.fulName = function() {
        return this.fName + " " + this.lName; 
    };
}
const myName = new Details("Chayon", "Mondol", 25, "Bangladeshi");
const myFather = new Details("Kishnapado", "Mondol", 50, "Indian")

// You cannot add a new property to an object constructor the same way you add a new property to an existing object
// Adding a Property to a Constructor
myFather.language = "Hindi";

// Adding a Method to an Object
myFather.allDetails = function(){
    return `I am ${this.fulName()} my age is ${this.age} and i'm Indian and my mothertongue ${this.language}.`
}

console.log(myName.fName);
console.log(myFather.fulName());
console.log(myFather.language);
console.log(myFather.allDetails());