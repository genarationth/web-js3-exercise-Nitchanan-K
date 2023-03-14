// Ask for input of three friend's names
const name1 = prompt("Enter the name of your first friend:");
const name2 = prompt("Enter the name of your second friend:");
const name3 = prompt("Enter the name of your third friend:");

// Output a console greeting
console.log(`Welcome ${name1}, ${name2}, and ${name3}!`);

// Define a function to calculate age from birth year
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

// Call the function with a birth year and log the result
const birthYear = prompt("Enter your birth year:");
const age = calculateAge(birthYear);
console.log(`You are ${age} years old.`);

// Define a function to print out welcome message with name and age
function printWelcomeMessage(name, birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  console.log(`Welcome ${name}, you are ${age} years old.`);
}

// Call the function for each person
printWelcomeMessage("Ed", 1990);
printWelcomeMessage("John", 1985);
printWelcomeMessage("Sarah", 1995);