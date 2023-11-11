// console.log('Trivia OK!')

const questions = [
  {
    id: 1111,
    order: 1,
    question: '¿Cómo se llama el método en JS que se utiliza para imprimir mensajes en la consola?',
    correctAnswer: 1,
    answerList: ['print()', 'console.log()', 'display()']
  },
  {
    id: 2222,
    order: 2,
    question: '¿Cuál es el operador utilizado para comparar el valor y el tipo de dos variables en JS?',
    correctAnswer: 2,
    answerList: ['==', '=', '===']
  },
  {
    id: 3333,
    order: 3,
    question: '¿Cuál es la función en JS que se utiliza para redondear hacia abajo el valor de un número decimal?',
    correctAnswer: 0,
    answerList: ['floor()', 'ceil()', 'round()']
  },
  {
    id: 4444,
    order: 4,
    question: 'Otra pregunta más',
    correctAnswer: 0,
    answerList: ['X', 'Y', 'Y']
  }
]

let correctAnswersCounter = 0 // Contador

// const questionsAndResults = document.querySelector('#questions-and-results')
const questionsAndResults = document.getElementById('questions-and-results')

let currentQuestionIndex = 0
// console.log(questions[currentQuestionIndex])


function prevQuestion(event) {
  // DONE: Añadir el botón "Pregunta anterior" con su funcionalidad respectiva.
  if (currentQuestionIndex <= 0) {
    return
  }

  currentQuestionIndex = currentQuestionIndex - 1 // contador
  renderQuestions()
}

function nextQuestion(event) {
  // DONE: Resolver el problema cuando no tenemos más preguntas para mostrar
  // if(currentQuestionIndex < 2){
  //   currentQuestionIndex = currentQuestionIndex + 1;
  //   renderQuestions();
  // }

  if (currentQuestionIndex >= questions.length - 1 ) {
    return
  }

  currentQuestionIndex = currentQuestionIndex + 1 // contador
  // console.log(currentQuestionIndex)
  renderQuestions()
}

function respondQuestion(event, questionSelected) {
  const currentQuestion = questions[currentQuestionIndex]

  // console.log(questionSelected === currentQuestion.correctAnswer)

  // Incrementar el numero de respuestas correctas
  if (questionSelected === currentQuestion.correctAnswer) {
    // correctAnswersCounter = correctAnswersCounter + 1
    correctAnswersCounter++
  }

  const answerButton = document.querySelectorAll('[data-answer]')
  // Esto es para mostrar las respuestas correctas e incorrectas con sus colores respectivos
  answerButton.forEach(button => {
    // console.log(button.dataset.answer)
    // console.log(button.dataset.answer,currentQuestion.correctAnswer)
    if (Number(button.dataset.answer) === currentQuestion.correctAnswer) {
      button.className = 'text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
    } else {
      button.className = 'text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
    }
    button.setAttribute('disabled', 'disabled')
  })

  // console.log(answerButton)

  console.log(correctAnswersCounter)
}

function startAgain(event) {
  correctAnswersCounter = 0
  currentQuestionIndex = 0

  renderQuestions()
}

function showResultPage(event) {
  // TODO: Terminar la pantalla de mostrar resultados con los datos respectivos para que sean dinámicos

  questionsAndResults.innerHTML = `
    <section class="flex flex-col px-4 py-6 text-center bg-green-600 border rounded-lg shadow">
      <p class="text-4xl font-medium text-gray-900 mb-4 text-white">¡GANASTE! o ¡PERDISTE!</p>
      
      <p class="text-md font-medium text-gray-900 mb-4 text-white">Respondiste 2 de 3</p>

      <p class="text-md font-medium text-gray-900 mb-4 text-white">Y este es tu puntaje: 20</p>

      <img src="https://placehold.co/300x100" />

      <div class="flex justify-end mt-10">
        <button
          type="button"
          class="text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2"
          onclick="startAgain(event)"
        >
          Empezar de nuevo
        </button>
      </div>
    </section>
  `
}

function renderQuestions() {
  // console.log('Estoy renderizando las preguntas...')
  const currentQuestion = questions[currentQuestionIndex]

  const question = `
    <section class="flex flex-col px-4 py-6 mb-3 border rounded-lg shadow">
      <p class="text-md font-medium text-gray-900 mb-4">
        ${currentQuestion.order}. 
        ${currentQuestion.question}
      </p>

      <div class="flex flex-col items-start mb-10">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
          data-answer="0"
          onclick="respondQuestion(event, 0)"
        >
          ${currentQuestion.answerList[0]}
        </button>
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
          data-answer="1"
          onclick="respondQuestion(event, 1)"
        >
          ${currentQuestion.answerList[1]}
        </button>
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
          data-answer="2"
          onclick="respondQuestion(event, 2)"
        >
          ${currentQuestion.answerList[2]}
        </button>
        <button type="button" class="hidden text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">Respuesta incorrecta 2</button>
        <button type="button" class="hidden text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">Respuesta correcta 3</button>
      </div>

      <div class="flex justify-end">
        <button
          type="button"
          class="hidden text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onclick="prevQuestion(event)"
        >
          Anterior
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onclick="nextQuestion(event)"
        >
          Siguiente
        </button>
        
        <button
          type="button"
          id="showResultsButton"
          class="${(currentQuestionIndex === questions.length - 1) ? '' : 'hidden'} text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2"
          onclick="showResultPage(event)"
        >
          Mostrar resultados
        </button>
      </div>
    </section>
  `

  questionsAndResults.innerHTML = question
}

renderQuestions()



