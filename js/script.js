const numbers = document.querySelectorAll('button[data-num]')
const operators = document.querySelectorAll('button[data-op]')
const finalResult = document.querySelector('.finalResult')
const newResult = document.querySelector('.newResult')

let num1 = "0"
let num2 = "0"
let operator = ""
let beforeOperator = ""

numbers.forEach((num) => {
    num.addEventListener('click', () => insertNum(num.textContent))
})

operators.forEach((op) => {
    op.addEventListener('click', () => {
        if (op.textContent === "AC") return resetAll()
        if (!(operator === "" && num2 === "0")) {
            beforeOperator = operator
            funOperation(beforeOperator)
            finalResult.textContent = num1
            operator = op.textContent
        }
        operator = op.textContent
        newResult.textContent = num1 + operator
    })
})

funOperation = (op) => {
    switch (op){
        case "+": {
            num1 = String(+num1 + +num2)
            break
        }
        case "-": {
            num1 = String(+num1 - +num2)
            break
        }
        case "x": {
            num1 = String(+num1 * +num2)
            break
        }
        case "÷": {
            num1 = String(+num1 / +num2)
            break
        }        
    }
    beforeOperator = ""
    num2 = "0"
}

insertNum = (num) => {
    if (operator) {
        if (num2 === "0") {
            num2 = num
            return finalResult.textContent = num
        }
        if (num2 !== "0") {
            num2 += num
            return finalResult.textContent += num
        }
    }
    if (num1 === "0") {
        num1 = num
        return finalResult.textContent = num
    }
    if (num1 !== "0") {
        num1 += num
        return finalResult.textContent += num
    }
}

resetAll = () =>{
    num1 = "0"
    num2 = "0"
    operator = ""
    beforeOperator = ""
    finalResult.textContent = "0"
    newResult.textContent = "0"
}