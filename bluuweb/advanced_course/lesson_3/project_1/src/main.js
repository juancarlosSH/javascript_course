// Arrays and Objects in JavaScript can be used to store multiple values or data.
// They can mutate, add, or remove elements.
const array_fruits = ["🍎", "🍐"];

console.log(array_fruits);
console.log(array_fruits[0]);

const pet = {
  name: "Tommy",
  age: 2,
  type: "Dog",
};

// Forms to access the properties of an object
console.log(pet);
console.log(pet.name);
console.log(pet["name"]);

// Complex objects
const todos = [
  {
    id: 1,
    text: "Learn JavaScript",
    completed: false,
    lenguaje: {
      name: "JavaScript",
      level: "Intermediate",
    },
  },
];

// Accessing the properties of an object within an array
console.log(todos);
console.log(todos[0]);
console.log(todos[0].text);
// Especial case when the property is not found use the optional chaining operator (?).
console.log(todos[0].lenguaje?.name);

// Destructuring is the most used way to access the properties of an object.
// It is a way to extract multiple properties from an object and assign them to variables.
// The order of the properties does not matter.
const { name, age, type } = pet;
console.log(name, age, type);

// Destructuring with arrays
// The order of the elements is important.
const [fruit1, fruit2] = array_fruits;
console.log(fruit1, fruit2);
