//dynamic import: podremos realizar importacion dinamica de piezas de codigo
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

//BigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// allSettled, regresa todas las promesas sin importar si alguna no sea resuelta

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// Global this
console.log(window);
console.log(globalThis);

//Operador null
const fooo = null ?? "default string";
console.log(fooo);

//Optional chaining

const user = {};

console.log(user?.profile?.email); //undefined

if (user?.profile?.email) {
  console.log("email");
} else {
  console.log("fail");
}
