const eventSalchipapa = new Event("salchipapa", { bubbles: true, cancelable: false });


console.log(document.children[0].children[1].children[1].innerHTML);




// const ball = document.getElementById("mipelotita")
const ball = document.querySelector("#mipelota");

// const todoslospes = document.querySelectorAll("p");

//  document.addEventListener("mousemove" , (evt) => {
//     ball.style.top = (evt.clientY - ball.clientHeight / 2) + "px";
//     ball.style.left = (evt.clientX - ball.clientWidth / 2) + "px";
// })

document.addEventListener("wheel" , (event) => {
    document.dispatchEvent(eventSalchipapa);
    const DELTA = 10;

    if (event.deltaY > 0){
        ball.style.height = (ball.clientHeight - DELTA) + "px";
        ball.style.width = (ball.clientWidth - DELTA) + "px";
        ball.style.top = (event.clientY - (ball.clientHeight - DELTA) / 2) + "px";
       ball.style.left = (event.clientX - (ball.clientWidth - DELTA) / 2) + "px";
    }
    else{
        ball.style.height = (ball.clientHeight + DELTA) + "px";
        ball.style.width = (ball.clientWidth + DELTA) + "px";
        ball.style.top = (event.clientY - (ball.clientHeight + DELTA) / 2) + "px";
       ball.style.left = (event.clientX - (ball.clientWidth + DELTA) / 2) + "px";
    }


})


const hacheuno = document.getElementById("titulo")

const aux = hacheuno.innerText;

hacheuno.addEventListener("mouseover", (event) => {
    hacheuno.innerText = "Estas pasando por encima!!!!!!"; 
    hacheuno.style.backgroundColor = "salmon"  
    document.dispatchEvent(eventSalchipapa);
})

hacheuno.addEventListener("mouseout", (event) => {
    hacheuno.innerText = aux
    hacheuno.style.backgroundColor = "transparent" 
    
})



const inputEnElJavascript = document.getElementById("inputNombre")

inputEnElJavascript.addEventListener("change" , (evt) => {
    console.log("el input ha cambiado" , inputEnElJavascript.value)
})

// inputEnElJavascript.addEventListener("keyup" , (evt) => {
//     console.log("el input ha cambiado" , inputEnElJavascript.value)
// })


const myForm = document.getElementById("formulario");



myForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    document.dispatchEvent(eventSalchipapa);
})


document.addEventListener("salchipapa", ()=>{
    console.log("Se ha lanzado la salchipapa!!!!");
})
