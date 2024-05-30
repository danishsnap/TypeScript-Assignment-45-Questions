"use strict";
/* Exercise No 13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”
*/
Object.defineProperty(exports, "__esModule", { value: true });
let transport = ["Suzuki GD 110 S", "Kawasaki Ninja H2R", "Bugatti Veyron"];
transport.map((items) => console.log(`I wish to purchase a ${items}`));
