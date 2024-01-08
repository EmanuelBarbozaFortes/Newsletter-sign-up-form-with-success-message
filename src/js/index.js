let inputEmail = document.querySelector(".input");
let form = document.querySelector('form');
let main = document.querySelector('main')
let popUp = document.querySelector('.confirmacao')
const label = document.querySelector(".label-invalid");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(inputEmail.value == ""){
        label.classList.add('invalid')
        inputEmail.classList.add('input-invalid')
    } else{
        popUp.classList.remove('mostrar-esconder')
        main.classList.add('mostrar-esconder')
        mostrarValor()
    }
});
inputEmail.addEventListener("change",() =>{
    if(inputEmail.value === ""){
        label.classList.add('invalid')
    } else{
        label.classList.remove('invalid')
        inputEmail.classList.remove('input-invalid')
    }
})

function mostrarValor() {
    let valorDigitado = inputEmail.value;
    document.getElementById("resultado").textContent = valorDigitado;
}