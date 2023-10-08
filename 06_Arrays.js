let scores = new Array(); // creates an empty Array
let numbers = new Array(10); // creates an array with size 10
let emptyArray = [];
let myNumbers = new Array(1, 3, 6, 7, 10);
let colors = ['red', 'green', 'blue'];

console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);

// get second value of colors array
console.log(colors[1]);

// add element to the end of Array
colors.push('white');
colors.push(5)
console.log(colors);

// how to add to the beginning of array
colors.unshift("orange");
console.log(colors);

// LOOPS with Arrays
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}

for (const value of colors) {
    console.log(value);
}

colors.forEach(element => {
    console.log(element);
})

// can we add multiple type of Data ? YES
let soupOfData = [5, 'cydeo', true, undefined, colors];
soupOfData.forEach(element => {
    console.log(typeof element);
})