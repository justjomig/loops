// FOR LOOP 

for(let i = 0; i < 10; i++) {
    if(i === 2) {
  console.log('2 is my favorite number');
  continue;
    }
    if(i === 5) { 
  console.log('Stop the loop');
  break;
    }

    console.log('Number ${i}');
}

// While loop 

let i = 0;

while(i< 10) {
console.log('Number ${i}')
i++;
}

// Do while
do {
    console.log('Number ${i}');
    i++;
}

while(i < 10);

// Loop Through Array
const cars = ['Ford', 'Chevy','Honda','Toyota'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Foreach
cars.forEach(function(car,index,array)) {
    console.log('${index} : ${car}');
    console.log(${array});
})

// Map
const users = [{id: 1, name: 'Raniel'},{id: 2, name: 'Jc'},{id: 3, name: 'Mirana'}];

const.ids = users.map(function(user) {
    return user.name;
}); 

console.log(ids);

// FOR IN LOOP 

const user = {
    firstName = 'Jose',
    lastName = 'Evangelista',
    age: 19
};

for(let x in user) {
console.log(`${x}: ${user[x]}`);
}