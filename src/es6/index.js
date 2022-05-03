// Default Params y Concatenación

// E5
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// E6
// Valores por defecto
function newFunction2(name = "oscar", age = 32, country = "mx") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("ricardo", "23", "CO");

//-----------------------------------------------------

let hello = "Hello";
let world = "world";

// E5
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// E6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//-----------------------------------------------------
//Multilinea, Desconstrucción, Spread Operatorm Oscpe de lET y VAR + CONST

//E5
let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry \n" +
  "otra frase epica que necesitamos";

//E6
let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

//-----------------------------------------------------
// Construir objetos js

let person = {
  name: "Camilo",
  age: 17,
  country: "CO",
};

console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//-----------------------------------------------------
//Spread Operator
let team1 = ["Camilo", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

//Gracias a esta manera podemos unir diferentes
//elementos de una forma mas amigable
let education = ["David", ...team1, ...team2];

console.log(education);

//-----------------------------------------------------
// Scope entre Let vs Var, +CONST

{
  var global = "Global var;";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(global);

//CONST es constante agregada en E6

const a = "b";

console.log(a);

//-----------------------------------------------------

//Parámetros en Obejtos, Arrow Functions, y Promises 

//Parámetros en Obejtos

let name = "Camilo";
let age = 17;

//E5
obj = { name: name, age: age };

//E6
obj2 = { name, age };

console.log(obj);
console.log(obj2);

//-----------------------------------------------------

// ArrowFunctions

const names = [{ name: "Camilo", age: 17 }{ name: "Yesica", age: 27 }];

//E5
let listOfNames = names.map(function (item){ console.log(item.name)})

//E6
let listOfNames2 = names.map(item => console.log(item.name))

//E6
const listOfNames3 = (name, age, country)=>{
  ...a
;}

//E6
const listOfNames4 = name => {
  ...b
};

const square = num => num * num;

//-----------------------------------------------------

// Promises, agregado en E6

const helloPromise = () => {
  return new Promise((resolve,reject) => {
    if (true){
      resolve('Hey!');
    } else{
      reject('Ups!!');
    }
  })
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('Hola'))
.catch(error => console.log(error));

