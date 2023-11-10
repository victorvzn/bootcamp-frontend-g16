// console.log('Hola JS')

const tasks = [] // Aquí almacenaremos las tareas

const taskInput = document.querySelector('.task__input') // Es la representación de un input desde javascript
const taskList = document.querySelector('.task__list')

// console.log(taskInput, taskList)
// console.log({ taskInput, taskList })

taskInput.addEventListener('keypress', function(event) {
  // Lógica de la aplicación
  // console.log(event.key)
  if (event.key === 'Enter') {
    // console.log('Agregando una nueva tarea...')
    const input = event.target
    const value = input.value

    const newTask = {
      title: value,
      done: false
    }

    // console.log(newTask)

    // console.log(tasks)

    tasks.push(newTask)

    // console.log(tasks)

    taskInput.value = ''

    renderTasks()
  }
})

function renderTasks() {
  // console.log('Dibujando las tareas...')
  let list = ''
  tasks.forEach(function(task, index) {
    // console.log(task, index)
    // list = list + task.title
    list = list + `
      <li class="task__item">
        <input type="checkbox" />
        <span>${task.title}</span>
        <button>Borrar</button>
      </li>
    `
  })

  // console.log(list)
  taskList.innerHTML = list
}