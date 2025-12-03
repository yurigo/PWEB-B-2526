

// document.querySelector("body > p").style.backgroundColor = "red";

const pes = document.querySelectorAll("main > p");

console.log(pes[4]);
console.log(pes[4].style);



// let aux = ""
pes.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log("p: <3 event.target ->", event.target);




        // if (!element.classList.contains("highlight")){
        //     aux = element.textContent;
        //     element.textContent = "has seleccionado este"
        // }else{
        //     element.textContent = aux;
        // }




    });
});

document.getElementsByTagName("body")[0].addEventListener("click", (event) => {
    console.log("body: has hecho click en el body")
})

const main = document.getElementsByTagName("main")[0];

main.addEventListener("click", (event) => {
    console.log("main: :O event.target ->", event.target);
    
})

main.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("main: T_T event.target ->", event.target);

    if (event.target.tagName === "P") {

        const element = event.target;


        console.log("hago lo que debería hacer en el p...");


        element.classList.toggle("highlight");



        const newElement = document.createElement("div");
        newElement.textContent = "+1"
        newElement.classList.add("clicked");

        element.appendChild(newElement);




        setTimeout(() => {
            //element.removeChild(newElement);
            newElement.classList.remove("clicked");
        }, 2500);

        setTimeout(() => {
            //element.removeChild(newElement);
            newElement.remove();
        }, 5000);

    }
})


const buttonHamburguer = document.querySelector("#hamburguer");
const buttonMenuClose = document.querySelector("#closeMenuButton");
const menu = document.querySelector("#menu");

buttonHamburguer.addEventListener("click", (event) => {
    // menu.style.display = "block";
    menu.classList.add("show")
});

buttonMenuClose.addEventListener("click", (event) => {
    // menu.style.display = "none";
    menu.classList.remove("show")
})