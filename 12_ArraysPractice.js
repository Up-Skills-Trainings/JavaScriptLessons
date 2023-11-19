// can we sort JS arrays? Yes - sort alphabetically

const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits = ["honda","toyota"]; we make the refence variable constant not the array values
fruits.push("Kiwi"); // we can add or change the values array
fruits.sort();
console.log("Frits array after sorting");
console.log(fruits);  // sorted in ascending order
// how to sort in descending order ? reverse() --> function
fruits.reverse();
console.log("Fruits array after reversing");
console.log(fruits);  // sorted in descending order

// how we sort numbers in JS
/**
 * sort() function sorts values as strings
 * to sort numbers we need to create a compare function and then sort
 */
const points = [40,100,1,5,25,10];
points.sort(function (a,b) { return a-b})
console.log(points);

// we can put objects inside arrays in JS
let employees = [
    {name:'John',salary:90000,hireDate:'July 1, 2010'},
    {name:'David',salary:75000,hireDate:'August 15, 2009'},
    {name:'Ana',salary:100000,hireDate:'December 12,2011'}
]

employees.sort(function(x,y){return x.salary - y.salary});
console.table(employees);