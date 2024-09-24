const numbers = document.querySelectorAll('button[data-num]')
const operators = document.querySelectorAll('button[data-op]')
const finalResult = document.querySelector('.finalResult')
const newResult = document.querySelector('.newResult')


let num1 = "0"
let num2 = "0"
let beforeResult = "0"

let operator = ""

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if (operator) {
            if (num2 === "0") {
                num2 = num.textContent
                return finalResult.textContent = num.textContent
            }
            if (num2 !== "0") {
                num2 += num.textContent
                return finalResult.textContent += num.textContent
            }
        }
        if (num1 === "0") {
            num1 = num.textContent
            return finalResult.textContent = num.textContent
        }
        if (num1 !== "0") {
            num1 += num.textContent
            return finalResult.textContent += num.textContent
        }

    })
})

operators.forEach((op) =>{
    op.addEventListener('click', () => {
        operator = op.textContent
        newResult.textContent = num1 + operator
    })
})