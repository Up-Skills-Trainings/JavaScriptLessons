// if else statements
let num1 = 100;
let num2 = 10;
let maxNumber;

if(num1 > num2) {
    maxNumber = num1;
}else{
    maxNumber = num2;
}
console.log(maxNumber);

// Ternary operator
maxNumber = num1 > num2 ? num1 : num2 ;

console.log('===ternary result=====');
console.log(maxNumber);

// switch statements in JS
let month = 4;
let dayCount;
switch (month) {
    case 2:
        dayCount = 28;
        break;
    case 1:
        dayCount = 31;
        break;
    case 4:
        dayCount = 30;
        break;    
    default:
        dayCount = -1;
        break;
}
console.log(dayCount);


