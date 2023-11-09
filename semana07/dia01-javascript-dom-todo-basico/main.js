// console.log('Funciona!')

const taskAdd = document.querySelector('.task__add')
// const taskInput = document.querySelector('.task__input')
const taskInput = document.getElementById('taskInput')
const taskList = document.querySelector('.task__list') // UL

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  console.log(taskInput.value)

  if (taskInput.value === '') {
    alert('El campo es requerido')
    return
  }

  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón'
  // document.body.appendChild(button)

  const li = document.createElement('li')

  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  // TODO: Añadir un botón al li con el texto 'Borrar' y al hacer click en el botón que se elimine la fila de la tarea
  const button = document.createElement('button')
  button.textContent = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  taskInput.value = ''
})

taskList.addEventListener('click', function(event) {
  console.log(event)

  const target = event.target

  console.log(target)

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    target.classList.toggle('completed')
  }

  if(target.tagName === 'BUTTON') {
    target.parentElement.remove()
  }
})

/*
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
*/