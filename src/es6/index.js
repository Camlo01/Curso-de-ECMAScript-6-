function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "oscar", age = 32, country = "mx") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("ricardo", "23", "CO");

let hello = "Hello";
let world = "world";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry \n" +
  "otra frase epica que necesitamos";

//es6
let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Camilo",
  age: 17,
  country: "CO",
};

console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["Camilo", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

//Gracias a esta manera podemos unir diferentes elementos de una forma mas amigable
let education = ["David", ...team1, ...team2];

console.log(education);

//LET vs VAR
//La diferencia radica en el scope
{
  var global = "Global var;";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(global);

//CONST es constante agregada en Es6
const a = "b";

console.log(a);
