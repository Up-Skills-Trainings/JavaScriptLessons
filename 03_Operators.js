// JS supports all kind of operations, order of operations is same with Java
console.log(4+4* -1 - 8 /2); // -4

// 8 is divided by 2 = 4, 4 and -1 is multiplied = -4, (4 + -4 - 4) = -4

// prefix
let a = 5;

console.log(++a); // 6

// postfix

let b = 5;

console.log(b++); // 5

console.log(b); // 6

// assignment operators
b += a;  // b = b + a;
console.log(b);


// Comparison Operators in JS
let one = 1;
let one_again = 1;
let one_string = '1';
let two_string = '2';

console.log(one == one_again); // true
console.log(one == one_string); // true
console.log(one === one_string); // false
console.log(one === one_again); // true
console.log(one_string === two_string); // false

let num1 = 5;
let num2 = 10;
let num3 = 15;
let result = num1 < num2 && num1 < num3; // true && true = true
console.log('=====Logical Operators=======');
console.log(result);
result = num1 > num2 && num1 < num3; // false && true = false
console.log(result);
result = num1 > num2 || num1 < num3;
console.log(result); // false || true = true
