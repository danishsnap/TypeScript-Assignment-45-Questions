"use strict";
/* Exercise No 06
Stripping Names: Store a person’s name, and include some whitespace
characters at the beginning and end of the name. Make sure you use each character
combination, "\t" and "\n", at least once. Print the name once, so the whitespace
around the name is displayed. Then print the name after striping the white spaces.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "\n\tDanish Akbar Rajpoot\t\n";
let name2 = name1.trim();
console.log(name1);
console.log(name2);
