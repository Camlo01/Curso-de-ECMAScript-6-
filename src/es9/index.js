// ¿Qué se implementó en ES9?

const obj = {
  name: "Camilo",
  age: 17,
  country: "COP",
};

let { country, ...all } = obj;
console.log(all);

// Composición de objetos

const obj = {
  name: "Camilo",
  age: 17,
};

const obj1 = {
  ...obj,
  country: "COP",
};

console.log(obj1);

// Promise Finally

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

//Agrupar bloques de rejects y acceder a estos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
