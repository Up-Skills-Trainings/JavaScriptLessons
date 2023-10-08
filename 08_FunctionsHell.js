// Let's create a function hell by async feature
/*
function waitingForSomeServerToACt() {
    let dataNeeded;
    setTimeout(() => {
       console.log('Backend data received');
       dataNeeded = 'Cydeo'; 
    }, 5000);
    return dataNeeded;
}
let data = waitingForSomeServerToACt();
console.log(data);
*/
function functionThatNeedsBackEndData(info) {
    console.log('I need this info for the rest of my code ' + info );
}

// functionThatNeedsBackEndData(waitingForSomeServerToACt());


// how to solve async feature with callbacks
function waitingForSomeServerToACt_WithCallback(callback) {
    let dataNeeded;
    setTimeout(() => {
       console.log('Backend data received');
       dataNeeded = 'Cydeo';
       callback(dataNeeded); 
    }, 5000);
    return dataNeeded;
}

waitingForSomeServerToACt_WithCallback(functionThatNeedsBackEndData);