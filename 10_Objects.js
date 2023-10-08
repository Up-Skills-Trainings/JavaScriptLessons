let person = {
    firstName : 'Joe',
    lastName : 'Doe'
}

console.log(person);
console.log(person.firstName);

person.age = 25; // add a new property with dot notation

console.log(person);

delete person.lastName;
console.log(person);

let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}
console.log(address);
console.log(address['building no']);

console.log('street' in address); // check if a  property exists

let course = {
    courseName : 'JS',
    url : 'www.cydeo.com',
    subjects : ['Objects', 'Arrays','Functions']
}

for (const key in course) {
    console.log(key+' : '+course[key]);
}

let myCar = {
    make : 'Dodge',
    year : 2023,
    engine : {
        cylinders : 4,
        size : 2.4
    },
    extras : ['AC', 'Cruise control', 'Sound System'],
    drive : function(){
        console.log('Running on Gas');
    }
}

myCar.drive(); // Running on Gas
console.log(myCar.extras[1]); // Cruise control
