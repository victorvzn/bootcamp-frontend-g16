// console.log('Trivia OK!')

const questions = [
  {
    id: 1,
    question: '¿Cómo se llama el método en JS que se utiliza para imprimir mensajes en la consola?',
    correctAnswer: 1,
    answerList: ['print()', 'console.log()', 'display()']
  },
  {
    id: 2,
    question: '¿Cuál es el operador utilizado para comparar el valor y el tipo de dos variables en JS?',
    correctAnswer: 2,
    answerList: ['==', '=', '===']
  },
  {
    id: 3,
    question: '¿Cuál es la función en JS que se utiliza para redondear hacia abajo el valor de un número decimal?',
    correctAnswer: 0,
    answerList: ['floor()', 'ceil()', 'round()']
  }
]

// const questionsAndResults = document.querySelector('#questions-and-results')
const questionsAndResults = document.getElementById('questions-and-results')

const currentQuestionIndex = 0
// console.log(questions[currentQuestionIndex])

function renderQuestions() {
  // console.log('Estoy renderizando las preguntas...')
  const currentQuestion = questions[currentQuestionIndex]

  const question = `
    <section class="flex flex-col px-4 py-6 mb-3 border rounded-lg shadow">
      <p class="text-md font-medium text-gray-900 mb-4">${currentQuestion.question}</p>

      <div class="flex flex-col items-start mb-10">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
        >
          ${currentQuestion.answerList[0]}
        </button>
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
        >
          ${currentQuestion.answerList[1]}
        </button>
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
        >
          ${currentQuestion.answerList[2]}
        </button>
        <button type="button" class="hidden text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">Respuesta incorrecta 2</button>
        <button type="button" class="hidden text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">Respuesta correcta 3</button>
      </div>

      <div class="flex justify-end">
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Siguiente pregunta
        </button>
        <button
          type="button"
          class="text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2"
        >
          Mostrar resultados
        </button>
      </div>
    </section>
  `

  questionsAndResults.innerHTML = question
}

renderQuestions()



