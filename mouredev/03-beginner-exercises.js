// 1. Escribe un comentario en una línea

// this a comment in one line

// 2. Escribe un comentario en varias líneas

/**
 * This is a comment
 * in multiple lines
 *  of code
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myLastName = "Suarez";
let myHeight = 1.83;
let haveWork = true;
let myFavoriteMovie;
let myJob = null;
let whySytmbol = Symbol("Anything");
let aBigInt = BigInt(2626262626267237272727272727277227);

// 4. Imprime por consola el valor de todas las variables

console.log("============================================");
console.log("myLastName " + myLastName);
console.log("myHeight " + myHeight);
console.log("haveWork " + haveWork);
console.log("myFavoriteMovie " + myFavoriteMovie);
console.log("myJob " + myJob);
console.log(whySytmbol);
console.log("aBigInt " + aBigInt);
console.log("============================================");

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myLastName);
console.log(typeof myHeight);
console.log(typeof haveWork);
console.log(typeof myFavoriteMovie);
console.log(typeof myJob);
console.log(typeof whySytmbol);
console.log(typeof aBigInt);
console.log("============================================");

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myLastName = "Hernández";
myHeight = 2.3;
haveWork = false;
myFavoriteMovie = null;
myJob = undefined;
whySytmbol = Symbol(23);
aBigInt = BigInt(true);

console.log("myLastName " + myLastName);
console.log("myHeight " + myHeight);
console.log("haveWork " + haveWork);
console.log("myFavoriteMovie " + myFavoriteMovie);
console.log("myJob " + myJob);
console.log(whySytmbol);
console.log("aBigInt " + aBigInt);
console.log("============================================");
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myLastName = BigInt(true);
myHeight = "Hernández";
haveWork = null;
myFavoriteMovie = false;
myJob = Symbol(23);
whySytmbol = undefined;
aBigInt = 2.3;

console.log("myLastName " + myLastName);
console.log("myHeight " + myHeight);
console.log("haveWork " + haveWork);
console.log("myFavoriteMovie " + myFavoriteMovie);
console.log(myJob);
console.log("whySytmbol " + whySytmbol);
console.log("aBigInt " + aBigInt);
console.log("============================================");

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const MY_STRING = "null xd";
const MY_INTEGER = 3.1416;
const MY_BOOLEAN = false;
const MY_UNDEFINED = undefined;
const MY_NULL = null;
const MY_SYMBOL = Symbol("wow");
const MY_BIGINT = BigInt(1212121212);

console.log("MY_STRING: " + MY_STRING);
console.log("MY_INTEGER: " + MY_INTEGER);
console.log("MY_BOOLEAN: " + MY_BOOLEAN);
console.log("MY_UNDEFINED: " + MY_UNDEFINED);
console.log("MY_NULL: " + MY_NULL);
console.log(MY_SYMBOL);
console.log("MY_BIGINT: " + MY_BIGINT);
console.log("============================================");
// 9. A continuación, modifica los valores de las constantes

/* MY_STRING = "null xd";
MY_INTEGER = 3.1416;
MY_BOOLEAN = false;
MY_UNDEFINED = undefined;
MY_NULL = null;
MY_SYMBOL = Symbol("wow");
MY_BIGINT = BigInt(1212121212); */

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
