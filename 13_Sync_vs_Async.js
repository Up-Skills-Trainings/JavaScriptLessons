/***
 * PIQ for JS and Cypress Interview sessions
 * what is sync code and async code? How do you handle asyn behaviour in JS?
 * 
 * To handle this problem they introduced promises structure
 * Latest approach in JS is - 'async function' s, 'await' statements
 */

let chars = Array.from('CYDEO'); // like tocharArray() method in JAVA
console.table(chars);

let text = '';
function myScript(value, index) {
    text += `${index}nth element is ${value}\n`; // JS way of string cancatination
}

function createArray(stringObject) {
    let elements = [];
    elements = Array.from(stringObject);
    return elements;
}
let moreArray = createArray('JAVASCRIPT');

chars.forEach(myScript);
console.log(text);

text = '';

moreArray.forEach(myScript);
console.log(text);

