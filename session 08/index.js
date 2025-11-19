// function suma(a,b){
//     return a + b;
// }

// console.log("funciona externamente!!!!!")
// console.log(suma(6,7));
// console.log("13")

// console.log(typeof(13))
// console.log(typeof("13"))


// var titulo = document.getElementById("tituloH1");
// console.log(titulo)


// declaracion de variables

var primeraVariable = 10;
// esta es la primera y ultima vez que usaré var!

let segundaVariable = 50;
const terceraVariable = 20;

segundaVariable = 100;
// terceraVariable = "hola" // no va


// primitivas
let a1 = 40;  //number
console.log(typeof (a1))

let a2 = 40.23; // number
console.log(typeof (a2))

let a3 = true // number
console.log(typeof (a3))

let a4 = "string" // number
console.log(typeof (a4))

let a5;
console.log(typeof (a5))

/*
esto 
es
un 
comentario
de
bloque
*/

let a6 = null;
console.log(typeof (a6))


// compuestas o complejos

let af = function () { }
console.log(typeof (af))

let _a7 = {};
console.log(typeof (_a7))

let $a8 = [];
console.log(typeof ($a8))


const arr = [1, 2, 3];
console.log(arr);
arr.push(4);
console.log(arr);

const obj = {
    clave: "valor",
    lorem: "ipsum",
    numero: 3,
    arr: [1, 2, 3, 4, 5],
    obj: {
        id: 4,
        nombre: "Alice",
        arr: [
            1, 2, 3, null, {
                id: 2,
            },
            {
                nombre: "Bob"
            }, true]
    }
}

console.log(obj.clave)
console.log(obj.arr[3])
console.log(obj.obj.arr[4].id)

// obj = {}

console.log(obj.obj.arr[4].id)


const notas = [10, 7, 10, 3, 4, 9.5];

console.log(notas)

notas.sort();

console.log(notas)

notas.reverse()

console.log(notas)

let texto;
texto = "lorem ipsum dolor sit amet";
texto = 'lorem ipsum dolor sit amet';
texto = `lorem ipsum dolor sit amet`;

console.log(texto)
texto =texto.toUpperCase() 
console.log(texto)
let textArray = texto.split(" ")
console.log(textArray)
textArray = textArray.toReversed()
console.log(textArray);
texto = textArray.join("_")
console.log(texto)


const stringConcat = "hola" + "que" + "tal" + (3 + 4);
console.log(stringConcat)

const radio = 1;

console.log(Math.PI * 2 * radio)

let a = 1000;
{

    let a = 100;
    
    function funcion()
    {
        // let a = 10;
        console.log("aqui!" , a)
    }
    
    console.log(a)
    
    funcion();
    
    console.log(a)
}
console.log(a)


// todavia no, no os asusteis!
// document.addEventListener("click", () => {
//     console.log("has hecho click en el documento")
// })

const unaVariable = 10;
const unavariable = 20;

console.clear();

console.log("2" == 2); // true HORROR!!!
console.log("2" === 2); // false yayyyy!!
console.log(3 !== 3); // false :D

console.log("a")

if ("truthy"){
    console.log("hay valor")
}
else{
    console.log("no hay valor")
}

let contador = 0;
while(contador <= 10){
    contador++;
    if (contador % 2 !== 0) continue;
    console.log(contador);
    if (contador === 10) break;
}

while(true){
    break;
}

for(;;){
    break;
}

for (let i = 1; i < 10 ; i+=2){
    console.log(i);
}


const compra = [
    "leche",
    "cacao",
    "avellanas",
    "azucar",
    "nocilla",
    "salmon"
];

for (let c of compra){
    console.log(c)
}











