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
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)
