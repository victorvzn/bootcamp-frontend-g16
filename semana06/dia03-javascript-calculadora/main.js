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
      //
    } else if (buttonText === '=') {
      //
    } else if (buttonText === 'AC') {
      //
    } else { // Se presionó algún número
      numeroActual = numeroActual + Number(buttonText)
    }

    inputDisplay.value = numeroActual
  })
})



