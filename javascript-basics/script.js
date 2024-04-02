let add7 = (a) => a + 7;

console.log(add7(3));

let multiply = (a, b) => a * b;

console.log(multiply(2, 5));

function capitalize(str) {
  str = str[0].toUpperCase() + str.slice(1);
  console.log(str);
}
//capitalize("aBcD");
//
const lastLetter = (str) => str[str.length - 1];

console.log(lastLetter("abcd"));
