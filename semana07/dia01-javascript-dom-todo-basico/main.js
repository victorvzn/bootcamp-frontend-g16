// console.log('Funciona!')

const taskAdd = document.querySelector('.task__add')
// const taskInput = document.querySelector('.task__input')
const taskInput = document.getElementById('taskInput')
const taskList = document.querySelector('.task__list') // UL

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  console.log(taskInput.value)

  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón'
  // document.body.appendChild(button)

  const li = document.createElement('li')
  li.textContent = taskInput.value
  taskList.appendChild(li)

  taskInput.value = ''
})