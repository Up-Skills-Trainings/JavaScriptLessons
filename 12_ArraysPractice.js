// can we sort JS arrays? Yes - sort alphabetically

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits = ["honda","toyota"]; we make the refence variable constant not the array values
fruits.push("Kiwi"); // we can add or change the values array
fruits.sort();
console.log("Frits array after sorting");
console.log(fruits); // sorted in ascending order
// how to sort in descending order ? reverse() --> function
fruits.reverse();
console.log("Fruits array after reversing");
console.log(fruits); // sorted in descending order

// how we sort numbers in JS
/**
 * sort() function sorts values as strings
 * to sort numbers we need to create a compare function and then sort
 */
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// we can put objects inside arrays in JS
let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 100000, hireDate: "December 12,2011" },
];

employees.sort(function (x, y) {
  return x.salary - y.salary;
});
console.table(employees);

// JS Array Iteration
/**
 * forEach()
 */

const numbers = [45, 4, 9, 16, 25];
let txt = "";

function myScript(value, index, _array) {
  txt += `${index}nth element is ${value}\n`;
}
// myScript() is a callBack function for forEach in this example
numbers.forEach(myScript);
console.log(txt);

let sum = 0;
let indexTxt = "";
function addAll(oscar, burak) {
  sum += oscar;
  indexTxt += burak + " ";
}
numbers.forEach(addAll);
console.log(`Total of numbers in my array is ${sum}`);
console.log(indexTxt);

// NOTE: when we create a callBack function to use for an Array, the first is variable poits to the VALUE, second one point to the index

// map() function on Arrays usage
const numbers1 = [45, 4, 9, 16, 25];

function multiplyByTwo(value) {
  return value * 2;
}
// create a new array with double values
const numbers2 = numbers1.map(multiplyByTwo); // used callBack function which is multiplyByTwo, we mapped all the values of numbers1 array to it
console.log(numbers2); // [ 90, 8, 18, 32, 50 ]


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let positionOfApple = fruits2.indexOf('Apple'); // JS arrays are zero indexed objects
console.log(positionOfApple); // 2 


// split or str.tocharArray ... Array.form()
let chars = Array.from('ABCDEFGH'); // length property, iterable object
console.log(chars);
txt = "";
chars.forEach(myScript);
console.log(txt);

// The ... operator expends the arrays: let's put all the arrays at this example together and create a new array
let combinedArray = [...fruits, ...points, ...numbers, ...chars];
txt = '';
combinedArray.forEach(myScript);
console.log(txt);

/**
 * How to create random values in JS
 * Math.random() used this with Math.floor() both to create random integers in JS
 * Math.random() creates decimal value between 0 and 1
 */
let number = Math.floor(Math.random() * 10); // between 0 and 10
console.log(number);

// create a number between 1 and 100
number = Math.floor(Math.random() * 100) + 1;
console.log(number);

// create a fake userName : oscar+qa(number) number between 5 or 6 digit numbers

// custom utilty function that creates a value between min and max values
function getRndInteger(min,max) {
  return Math.floor(Math.random() * max) + min;
}

console.log(getRndInteger(10,1000));

// Dates in JS   getDate()