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

