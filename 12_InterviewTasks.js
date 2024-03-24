 /*
        Write a function that can find the maximum number from an number Array
     */

let numbers = [3,5,-9,0,15,10,-12, 4.5];  // different array declaretion
numbers.push(15.5);
console.table(numbers);        

function maxValue(arrName) {
    /**
     * Assign first or INTEGER.MIN value as max Value, then loop inside the array to find the new max and return that value
     * arrName: a generic name, what makes it an array for JS is how you write your code
     */
    // declare a variable for max value
    let max;
    // assign a value
    max = arrName[0];
/*
    for (let index = 0; index < arrName.length; index++) {
        let element = arrName[index];
        if(element > max){
            max = element;
        }
    }
*/
    arrName.forEach(eachNumber => {
        if(eachNumber > max){
            max = eachNumber;
        }
    });

    return max;
}

// public static int maxValue(int[] arr){   }

// call function
let maxNumberFromArray = maxValue(numbers);
console.log(maxNumberFromArray);


let anotherFunction = maxValue;
console.log( anotherFunction(numbers) ) ;

console.log(typeof maxValue(numbers));
console.log(typeof numbers);



