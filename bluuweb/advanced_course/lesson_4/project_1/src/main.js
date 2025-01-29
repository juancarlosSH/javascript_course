// Get the element with the id of app.
const app = document.getElementById("app");

// Create a function that returns a card with a title and a description.
function card(title, description) {
  return (
    "<div class='card'><h2>" + title + "</h2><p>" + description + "</p></div>"
  );
}

// Change the content of the element with the id of app.
function cardV2(title, description, avilable) {
  // return with interpolation string and ternary operator.
  return `
    <div class="card my-2" >
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a href="#" class="btn ${btnClass(avilable)}">Go somewhere</a>
      </div>
    </div>
  `;
}

// Create a function that returns a class for the button.
// This is an arrow function.
// The arrow function is a shorter way to write a function.
// The arrow function can't be hoisted.
// The arrow function doesn't have its own this.
const btnClass = (avilable) => (avilable ? "btn-primary" : "btn-danger");

// Create an array of cards.
const cards = [
  {
    title: "Card 1",
    description: "This is the description of the card 1",
    avilable: true,
  },
  {
    title: "Card 2",
    description: "This is the description of the card 2",
    avilable: false,
  },
  {
    title: "Card 3",
    description: "This is the description of the card 3",
    avilable: true,
  },
  {
    title: "Card 4",
    description: "This is the description of the card 4",
    avilable: false,
  },
];

// Change the content of the element with the id of app.
app.innerHTML = cards
  .map((card) => cardV2(card.title, card.description, card.avilable))
  .join("");

// Print with desctructuring
const print = ({ title, description }) => {
  console.log(title, description);
};

// Print the cards with destructuring and forEach.
cards.forEach(print);
