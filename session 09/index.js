// let a = 10;

// saludar(undefined, 2347989);

// {
//     // const a = 1000;
//     a = 100000;
//     console.log(a)
// }


// function saludar(nombre = "valor por defecto", edad){
//     const a = 20;
//     console.log("hola: " + nombre + " con " + edad +  " años");
//     console.log("a es " , a);
// }

// console.log(a);


// const nuevoSaludar = function(nombre){
//     console.log("hola 2", nombre);
// }

// nuevoSaludar("pepito");


const suma = function (a,b){
    return a + b;
}

// el return es implicito
const arrowSuma = (a,b) => a + b;

console.log(suma(8,6));
console.log(arrowSuma(8,6));


const cuadrado = (a) => a * a;
console.log(cuadrado(8,6));

console.clear();



let compra = [
    "leche",
    "cacao",
    "avellanas",
    "salmon"
]

console.log(compra)

compra.push("azucar");

console.log(compra);

compra.unshift("jabón")

console.log(compra);

const elemento = compra.pop()

console.log(compra);

const elemento2 = compra.shift()

console.log(compra);


console.log(compra[3])

compra[3] = "azúcar"


console.log(compra);

// compra.clear(); <--- esto me he flipao

console.log(compra);


let texto = "lorem ipsum dolor sit amet";
// texto = texto.toLocaleUpperCase()

let arrayTexto = texto.toUpperCase().split(" ");

console.log(arrayTexto);
console.log(arrayTexto.toReversed());
console.log(arrayTexto);

let junto = arrayTexto.toReversed().join(" ")

console.log(junto)

console.log(texto);


console.log(texto.toUpperCase().split(" ").reverse().join(" "))



console.clear()

console.log("hola"  , compra)

compra.forEach(function(element, index, array){
    console.log("estoy dentro del foreach")
    console.log("elemento: ", element);
    console.log("indice ", index);
    console.log("array ", array);
    console.log("he acabado el elemento")
    return 1000;
});

for (let c of compra){
  console.log("estoy dentro del foreach")
    console.log("elemento: ", c);
    console.log("indice ", );
    console.log("array ", compra);
    console.log("he acabado el elemento") 
}


console.clear()


compra.push("aguacate")
console.log("hola"  , compra);

// const elementoEncontrado = compra.find(function(element){
//     return element.startsWith("a")
// });

// function busqueda(element){
//     return element.startsWith("a");
// }
//const elementoEncontrado = compra.find(busqueda);

const elementoEncontrado = compra.find(rr => rr.startsWith("a"))
console.log(elementoEncontrado);


const arrayFiltrado = compra.filter((_, indice) => indice % 2 !== 0 )
console.log(arrayFiltrado);


console.clear();
console.log(compra)

// quiero borrar avellanas:

compra = compra.filter((elemento) => elemento !== "avellanas" )
console.log(compra)


 console.clear();

 let numeros = [1,2,3,4,5,6,7,8,9];
 numeros = numeros.map((element) => element * 2)
 console.log(numeros)


 const usuarios = [{
    id: 1,
    nombre: "Alice",
    apellido: "Doe"
 },
 {
    id: 2,
    nombre: "Bob",
    apellido: "Doe"
 },
 {
    id: 3,
    nombre: "Charlie",
    apellido: "Doe"
 },
];

// function funcionDeMapeado(elemento,index,array){
//     return {
//         id: salchipapa.id,
//         nombreYApellidos: salchipapa.nombre + " " + salchipapa.apellido
//     }
// }

// const newUsuarios = usuarios.map(funcionDeMapeado)

const newUsuarios = usuarios.map((elemento) => {
    return {
        id: elemento.id,
        nombreYApellidos: elemento.nombre + " " + elemento.apellido,
    }
})

console.log(usuarios)
console.log(newUsuarios)