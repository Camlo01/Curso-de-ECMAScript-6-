//-----------------------------------
// Async y Await, Object Values, padding, Trailing-Comas
// Async y Await

const data = {
  frontend: "Oscar",
  backend: "isabel",
  desing: "Ana",
};

//Nos retorna un arreglo
const entries = Object.entries(data); //Convertir objeto a arreglo

console.log(entries);

// [
//     [ 'frontend', 'Oscar' ],
//     [ 'backend', 'isabel' ],
//     [ 'desing', 'Ana' ]
// ]
console.log(entries.length); //Nos retorna cantidad de elementos

//-----------------------------------

// Object values
//Devuelve los valores de un arreglo a un objeto

const data2 = {
  frontend: "Oscar",
  backend: "isabel",
  desing: "Ana",
};

const values = Object.values(data2);

console.log(values);
// [ 'Oscar', 'isabel', 'Ana' ]
console.log(values.length);

//-----------------------------------

// padding

const string = "hello";
console.log(string.padStart(7, "hi")); //hihello
console.log(string.padEnd(12, " -----")); // hello -----
console.log("food".padEnd(12, "  -----")); // food  -----

//----

//Trailing-Comas

const obj = {
  name: "Camilo",
};
//Establece que puede haber un valor

//-----------------------------------
//-----------------------------------

// Async y Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();

  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
