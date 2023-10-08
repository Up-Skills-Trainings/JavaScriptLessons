let x = function (a) {
    return 5*a;
}
// concise way of creating function
let y = a => 5*a; 
console.log(y(5));

let arr = [10,20,30];
// map function 
let newArr = arr.map(each => each*2);
console.log(newArr);

//varArgs in JS
function howManyElements(...theArgs) {
    console.log(theArgs.length);
}

howManyElements();
howManyElements(5);
howManyElements(3,4,5,6,7,8);

function multiply(multiplier,...theArgs) {
    return theArgs.map(element => multiplier * element)
}

console.log(multiply(5,1,2,3,4,5)); //[ 5, 10, 15, 20, 25 ]

let str = 'CYDEO';
let chars = [...str];
console.log(chars); // [ 'C', 'Y', 'D', 'E', 'O' ]