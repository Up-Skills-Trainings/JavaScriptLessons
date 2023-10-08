let stateOfTheWebPage = function(state) {
    return new Promise(function (resolve,reject)  {
        if(state){
            resolve('Page is Loaded');
        }else{
            reject('Page is NOT loaded yet');
        }
    })
};
stateOfTheWebPage(true).then((result) => {
    console.log(result);
});

stateOfTheWebPage(false).catch((result) => {
    console.log(result);
})


new Promise((resolve,reject) => {
    resolve(1);
}).then((result) => {
    console.log(result);  // 1
    return result*2;
}).then((result2) => {
    console.log(result2);  // 2
    return result2*2;  
}).then((result3) => {
    console.log(result3);  // 4
})