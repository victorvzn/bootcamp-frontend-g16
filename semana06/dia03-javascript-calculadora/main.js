console.log('Hola Javascript!')

let numeroActual = '0'
let operador = ''
let operando = ''

const inputDisplay = document.querySelector('.inputDisplay')
const buttons = document.querySelectorAll('.button')

// console.log(inputDisplay)
// console.log(buttons)

// EVENTOS

buttons.forEach(function(button) {
  // console.log(button)

  button.addEventListener('click', function(event) {
    // console.log('Me hicieron click, auxilio!')
    // console.log(event)

    const button = event.target
    const buttonText = button.textContent

    // console.log(buttonText)

    if('+-*'.includes(buttonText)) {
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText.trim() === '=') {
      // Aquí realizo las operaciones matemáticas en base al número actual y el operando
      if(operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else  if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'AC') {
      numeroActual = '0'
      operador = ''
      operando = ''
    } else { // Se presionó algún número
      numeroActual = Number(numeroActual + buttonText)
    }

    inputDisplay.value = numeroActual
  })
})



