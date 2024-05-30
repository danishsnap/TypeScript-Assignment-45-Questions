/* Exercise No 12
Greetings: Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name.
*/

let names = ["Akbar", "Danish", "Zeeshan", "Mubashir"];

// 1st Method

console.log(`${names[0]} you are invited to my party`);
console.log(`${names[1]} you are invited to my party`);
console.log(`${names[2]} you are invited to my party`);
console.log(`${names[3]} you are invited to my party`);

// 2nd Method Ascending Order

for (let i = 0; i < names.length; i++)
  console.log(`${names[i]} you are invited to my party`);

// 3rd Method in Descending Order

for (let i = 3; i >= 0; i--)
  console.log(`${names[i]} you are invited to my party`);