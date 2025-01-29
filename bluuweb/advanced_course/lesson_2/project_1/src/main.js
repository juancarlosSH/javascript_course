// let its a variable that can be changed
// for example, we can change the value of the variable
let counter = 0;
console.log(counter);
counter++;
console.log(counter);

// but if you try to declare the same variable again, you will get an error
// let counter = 1;
// console.log(counter);

// The scope of the variable is limited to the block where it was declared
if (true) {
  let counter = 100;
  console.log(counter);
}

if (true) {
  console.log(counter);
}

// const is a variable that can't be changed
// for example, if we try to change the value of the variable, we will get an error
const secondCounter = 10;
console.log(secondCounter);
// secondCounter++;
// console.log(secondCounter);

// if you try to declare the same variable again, you will get an error
// const secondCounter = 100;
// console.log(secondCounter);

// The scope of the variable is limited to the block where it was declared
if (true) {
  const secondCounter = 100;
  console.log(secondCounter);
}

if (true) {
  console.log(secondCounter);
}

// var is a variable that can be changed
// for example, we can change the value of the variable
var thirdCounter = 0;
console.log(thirdCounter);
thirdCounter++;
console.log(thirdCounter);

// if you try to declare the same variable again, you will not get an error
var thirdCounter = 100;
console.log(thirdCounter);

// The scope of the variable is limited to the function where it was declared
function scope() {
  var thirdCounter = 100;
  console.log(thirdCounter);
}

scope();

console.log(thirdCounter);
