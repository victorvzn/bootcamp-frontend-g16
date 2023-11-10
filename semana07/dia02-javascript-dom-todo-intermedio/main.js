// console.log('Hola JS')

const tasks = [] // Aquí almacenaremos las tareasr

const taskInput = document.querySelector('.task__input') // Es la representación de un input desde javascript
const taskList = document.querySelector('.task__list')

// console.log(taskInput, taskList)
// console.log({ taskInput, taskList })

taskInput.addEventListener('keypress', function(event) {
  // Lógica de la aplicación
  console.log(event.key)
  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea...')
  }
})