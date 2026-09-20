alert("Hello World");
// data type
let age = 52;
let score = 153;

console.log(age);
console.log(score);

age = 30;
console.log(age);

const year = 2027;

console.log(year);
//string
console.log("Hello World");

let email = "bolaji@gmail.com"

console.log(email);
//string concatenation

let firstname = "Random";
let lastname = "Person";

let fullname = firstname + " " + lastname;

console.log(fullname);

//getting characters
console.log(fullname[0]);

//string length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
// let result = fullname.toLowerCase();
// let result1 = fullname.toUpperCase();
// console.log(result, result1, fullname);

// let index = email.indexOf("@");
// console.log(index);

let index = email.lastIndexOf("a");
console.log(index);

// let result = email.slice(0, 6);
// console.log(result);

// let result = email.substr(4, 10);
// console.log(result);

let result = email.replace("bolaji", "random");
console.log(result);