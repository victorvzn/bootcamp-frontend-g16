// console.log('Hola JS')

let tasks = [] // Aquí almacenaremos las tareas

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

function checkTask(event, currentIndex) {
  console.log('La tarea seleccionada tiene el indice', currentIndex)
  // TODO: Hacer que el todo se tache usando solo Javascript (10 minutos)
  const checkboxSelected = event.target
  const liParent = checkboxSelected.parentElement
  liParent.classList.toggle('isChecked')

  const taskSelected = tasks[currentIndex]
  taskSelected.done = !taskSelected.done

  console.log(tasks)
}

function removeTask(event, currentIndex) {
  console.log('Eliminando', currentIndex)
  // event.target.parentElement.remove()

  const newTasks = tasks.filter((task, index) => index !== currentIndex)
  tasks = newTasks
  console.log(newTasks)
  
  renderTasks()
}

function renderTasks() {
  // console.log('Dibujando las tareas...')
  let list = ''
  tasks.forEach(function(task, index) {
    // console.log(task, index)
    // list = list + task.title
    list = list + `
      <li class="task__item">
        <input
          type="checkbox"
          onchange="checkTask(event, ${index})"
        />
        <span>${task.title}</span>
        <button onclick="removeTask(event, ${index})">Borrar</button>
      </li>
    `
  })

  // console.log(list)
  taskList.innerHTML = list
}