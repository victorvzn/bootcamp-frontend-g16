// console.log('Hola desde JS')

const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')
const btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', function (event) {
  // console.log(event)
  console.log(event.target)
})




// console.log(inputPeso, inputAltura)
// console.log(inputPeso.value)
// inputPeso.value = 90
