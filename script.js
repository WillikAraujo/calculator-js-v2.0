let numbers = document.querySelectorAll(".num")
let allButtons = document.querySelector('.buttons')
let newAllButtons = allButtons.querySelectorAll('button')
let numElement = document.querySelector('.numResult')

let xNumber = "0"
let yNumber = "0"
let operadorSelecionado = ""
let operadorAnterior = ""
let newResult = "0"
let numOperado = false


let operadores = Array.from(newAllButtons).filter((operadores) => {
    return !operadores.className.includes("num")
})


operadores.forEach((operador) =>{
    operador.addEventListener('click', ()=>{
        operadorSelecionado !== "" ? operadorAnterior = operadorSelecionado : operadorSelecionado
        operadorSelecionado = operador.textContent
        if (operadorSelecionado === "C") return resetAll(operadores)
        if (xNumber !== "" & yNumber !== "" & operadorSelecionado !== "") {
            operadores.forEach((operador) => {operador.classList.remove('selecionado')} )
            operador.classList.add('selecionado')
            let num1 = Number(xNumber)
            let num2 = Number(yNumber)
            switch (operadorAnterior){
                case "+": {
                    newResult = num1+num2 
                    xNumber = newResult
                    yNumber = "0"
                    break
                }
                case "-": {
                    newResult = num1-num2
                    xNumber = newResult
                    yNumber = "0"
                    break
                }
                case "/": {
                    newResult = num1/num2 
                    xNumber = newResult
                    yNumber = "0"
                    break
                }
                case "x": {
                    newResult = num1*num2 
                    xNumber = newResult
                    yNumber = "0"
                    break
                }
        }
    }

        if (operadorSelecionado === "=") return numElement.textContent = newResult
        newResult !== "0" ? numElement.textContent = newResult + operador.textContent : numElement.textContent = numElement.textContent + operador.textContent
        console.log(numElement.textContent)
    })
})


numbers.forEach((num) =>{
    num.addEventListener('click', ()=> {
        if (operadorSelecionado === "=") return resetAll(operadores)
        Inserir(num.textContent)
        if (operadorSelecionado !== "" & yNumber === "0" ) return yNumber = num.textContent 
        if (operadorSelecionado !== "" & yNumber !== "0" ) return yNumber = yNumber + num.textContent
        if (operadorSelecionado === "" & xNumber === "0" ) return xNumber = num.textContent
        if (operadorSelecionado === "" & xNumber !== "0" ) return xNumber = xNumber + num.textContent
    })
})


Inserir = (input) => {
    if (numElement.textContent !== "0") numElement.textContent = numElement.textContent + input
    if (numElement.textContent === "0") numElement.textContent = input    
}

resetAll = (operadores) =>{
    operadores.forEach((operador) => {operador.classList.remove('selecionado')} )
    xNumber = "0"
    yNumber = "0"
    operadorSelecionado = ""
    operadorAnterior = ""
    newResult = "0"
    return numElement.textContent = newResult
}

