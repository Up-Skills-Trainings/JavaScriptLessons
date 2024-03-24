/***
 * PIQ for JS and Cypress Interview sessions
 * what is sync code and async code? How do you handle asyn behaviour in JS?
 * 
 * To handle this problem they introduced promises structure
 * Latest approach in JS is - 'async function' s, 'await' statements
 */

// let chars = Array.from('CYDEO'); // like tocharArray() method in JAVA
// console.table(chars);
/*  THE PROBLEM ASYNC
let text = '';
function myScript(value, index) {
    text += `${index}nth element is ${value}\n`; // JS way of string cancatination
}

function createArray(stringObject) {
    let elements = [];
    setTimeout(() => {
        elements = Array.from(stringObject);
        console.log('just received the data from dataBase but it is too late');
    }, 3000);
    return elements;
}
let moreArray = createArray('JAVASCRIPT');

text = 'empty';

moreArray.forEach(myScript); // this function is not waiting for backend response 3 seconds
console.log(text);
*/

// lets use promises to handle this problem

function createArray(stringObject) {
    return new Promise(function (resolve,reject){
        if(stringObject){
            let elements = [];
            setTimeout(() => {
                elements = Array.from(stringObject);
                console.log('just received the data from dataBase NOT LATE ANYMORE');
                resolve(elements)
            }, 3000);
        }else{
            reject('NO object provided');
        }
    })
}
let text = '';
function myScript(value, index) {
    text += `${index}nth element is ${value}\n`; // JS way of string cancatination
}
createArray('JAVASCRIPT').then((arr) => {
    arr.forEach(myScript);
    console.log(text);
}).catch((str) => {
    console.log(str);
})

