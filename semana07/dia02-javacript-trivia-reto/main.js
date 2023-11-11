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
    question: '¿Cuál es el función en JS que se utiliza para redondear hacia abajo el valor de un número decimal?',
    correctAnswer: 0,
    answerList: ['floor()', 'ceil()', 'round()']
  }
]

// const questionsAndResults = document.querySelector('#questions-and-results')
const questionsAndResults = document.getElementById('questions-and-results')

