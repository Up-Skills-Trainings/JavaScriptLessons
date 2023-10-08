// for loop, while loop and do while loop
for (let index = 0; index <= 5; index++) { // let creates a local scope variable
    console.log(index);
}
// console.log(index);

// old type of declaring variables in JS: before ES6
for(var j = 0 ; j < 5 ; j++ ){
    console.log(j);
}
console.log(j); // var statement creates a global scope variable declaration

// while loops
console.log('====While Loops=====');
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

console.log('====Do While=====');
let z = 0;

do {
    console.log(z);
    z++;
} while (z < 3);