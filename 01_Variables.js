// Single comment line
/**
 * Multi Line Comment line
 */

// Declare a variable
let message;
// Assign a value
message = 'Hello Cydeo Students';

console.log(message);

// re-assign a new value
message = 'My first JS Code';

console.log(message);

// create 2 variables at the same line
let admin, userName;
userName = 'John';
admin = userName;
console.log(admin);

/**
 * JS is dynamicly typing language
 */

let a;
console.log(typeof a); // undefined
a = 5; // JS infers that a is a number
console.log(typeof a); // number

a = 'Cydeo';
console.log(typeof a); // string

a = true;
console.log(typeof a); // boolean

a = null;
console.log(typeof a);

let x = 5, y = 'Cydeo';
console.log(x+y);
console.log(x*y); //NaN

const b = 45;
// can I re-assign a new value to const
b = 30; // TypeError: Assignment to constant variable.
console.log(b);

