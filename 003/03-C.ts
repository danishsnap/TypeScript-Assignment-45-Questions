/* Exercise No 03 - C Title Case
Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let person_name: string = "danish akbar rajpoot";

function titlecase(personname: string) {
  let name;
  name = personname.toLowerCase().split(" ");
  for (let i = 0; i < name.length; i++) {
    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
  }
  return name.join(" ");
}
console.log(`${titlecase("danish akbar rajpoot")}`);