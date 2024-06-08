/* Exercise No 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of
three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end
of your list. • Print a new set of invitation messages, one for each person in your list.
*/

let guests = ["Akbar", "Danish", "Zeeshan", "Nabeela"];

let cannotattend = guests[0];

console.log(`${cannotattend} is currently unable to attend the party`);

for (let i = 1; i < guests.length; i++)
  console.log(
    `Dear ${guests[i]}, i found a bigger dinner table so i invited more peoples.`
  );

guests.unshift("Imran");
guests.splice(3, 0, "Nadeem");
guests.push("Usman");

// Using for loop in ascending order

for (let i = 0; i < guests.length; i++)
  console.log(
    `Dear ${guests[i]}, You are invited in more people list to my party.`
  );

// Using for loop in descending order

for (let i = 6; i >= 0; i--)
  console.log(
    `Dear ${guests[i]} You are invited in more people list to my party.`
  );

// Using map

guests.map((items) =>
  console.log(`Dear ${items} You are invited in more people list to my party.`)
);