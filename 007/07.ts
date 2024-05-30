/* Exercise No 07
Number Eight: Write addition, subtraction, multiplication, and division operations
that each result in the number 8. Be sure to enclose your operations
in print statements to see the results.
*/

// 1st Method

console.log(4 + 4, 10 - 2, 2 * 4, 24 / 3);

// 2nd Method

let addition = 4 + 4;
let subtraction = 10 - 2;
let multiplication = 2 * 4;
let division = 24 / 3;

console.log(addition, subtraction, multiplication, division);

// 3rd Method

// 1 Addition
function sum(n1: number, n2: number): number {
  return n1 + n2;
}
let addition2 = sum(4, 4);

// 2 Subtraction
function difference(n1: number, n2: number): number {
  return n1 - n2;
}
let subtraction2 = difference(10, 2);

// 3 Multiplication
function product(n1: number, n2: number): number {
  return n1 * n2;
}
let multiplication2 = product(2, 4);

// 4 Division
function quotient(n1: number, n2: number): number {
  return n1 / n2;
}
let division2 = quotient(24, 3);

console.log(addition2, subtraction2, multiplication2, division2);