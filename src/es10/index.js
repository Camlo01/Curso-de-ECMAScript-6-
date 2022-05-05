//flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

//flatmap

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

// Eliminar espacios en un String

let hello = "                   hello World";

console.log(hello); //                   hello World
console.log(hello.trimStart()); //hello World

let hello = "hello World          ";
console.log(hello); //hello World          .
console.log(hello.trimEnd()); //ello World.

// Podemos trabajar con error sin tener que pasarlo como parametro por catch
try {
} catch {
  error;
}

// From Entries (arreglos a objetos)

let entries = [
  ["name", "Camilo"],
  ["age", 17],
];

console.log(Object.fromEntries(entries)); //{ name: 'Camilo', age: 17 }

let mySymbol = `description: My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description); //description: My Symbol
