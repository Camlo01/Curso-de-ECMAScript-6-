//replace
const string =
  "JavaScript es muy maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");

console.log(replacedString); //Python es muy maravilloso, con Javascript puedo crear el futuro de la web

const replacedString2 = string.replaceAll("JavaScript", "Python");

console.log(replacedString2);

// Private Methods

class Message {
  #show(val) {
    //con # se vuelve un metodo privado
    console.log(val);
  }
  get #add(val){
    ...
  }
}
const message = new Message();
message.show("Hola!");


//Promise Any
const promise1 = new Promise((resolve, reject)=> reject("1"))
const promise2 = new Promise((resolve, reject)=> resolve("2"))
const promise3 = new Promise((resolve, reject)=> resolve("3"))

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response)); //retorna el valor que se resuelva primero

// With reff

class anyClass{
constructor(element){
this.ref = new WeakRef(element)
}
// {...}
};

//Operadores AND logico, OR logico, Anulación logico

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

//-------

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

//-------

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);


