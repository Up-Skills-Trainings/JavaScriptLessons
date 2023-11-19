/**
 * Our problem in JS id our functions are ASYNC: 
 * PIQ: What is the difference between sync and async
 */

let txt = "";

function myScript(value, index) {
    txt += `${index}nth element is ${value}\n`;
  }
/**
 * Sync code
 * function createArray(stringObject) {
    let chars = [];
    chars = Array.from(stringObject);
    return chars;
}
let arr = createArray("CYDEO");
console.log(arr);
arr.forEach(myScript);
console.log(txt);
 */

/**
 * ASYNC code example
 * function createArray(stringObject) {
    let chars = [];
    setTimeout(() => {
        chars = Array.from(stringObject);
        console.log('just received the data but too late');
    }, 3000);
    return chars;
}

let arr = createArray("CYDEO");
console.log(arr);
arr.forEach(myScript);
console.log(txt);
 */

// HOW TO HANDLE ASYNC code in JS: promisses, 
// new JS is using async notation as a function (async and await implementation)

function createArray(stringObject) {
    return new Promise(function (resolve,reject) {
        if(stringObject){
            let chars = [];
            setTimeout(() => {
                chars = Array.from(stringObject);
                console.log('just received the data but NOT too late anymore');
                resolve(chars);
            }, 3000);
        }else{
            reject("NO object provided");
        }
    })
}

createArray("CYDEO").then((arr) => {  // if promiss fullfills it will return to me an array object and I gave a name as 'arr'
    arr.forEach(myScript);
    console.log(txt);
}).catch((str) => {
    console.log(str);
})

