let numbers = document.querySelectorAll(".num")
let allButtons = document.querySelector('.buttons')
let newAllButtons = allButtons.querySelectorAll('button')

let initialNumber = "0"

let operadores = Array.from(newAllButtons).filter((operadores) => {
    return !operadores.className.includes("num")
})

operadores.forEach((operador) =>{
    operador.addEventListener('click', ()=>{
        console.log(operador.textContent)
    })
})


numbers.forEach((num) =>{
    num.addEventListener('click', ()=> {
        console.log(num.textContent)
    })
})
