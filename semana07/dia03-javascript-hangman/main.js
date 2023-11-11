// console.log('Hola JS')

const answer = "Javascript"

const word = answer.toUpperCase()

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]

let correctGuesses = ''

const elMaskedWord =  document.querySelector('.hangman__maskedword')
const elButtons =  document.querySelector('.hangman__buttons')
const elResult =  document.querySelector('.hangman__result')

function selectLetter(event, letter) {
  if (word.includes(letter)) {
    console.log(letter)
    correctGuesses = correctGuesses + letter
    renderMaskedWord()
  }
}

function renderMaskedWord() {
  elMaskedWord.textContent = word
    .split('')
    .map(
      letter => correctGuesses.includes(letter) ? letter : '_'
    )
    .join('')


  if (!elMaskedWord.textContent.includes('_')) {
    console.log('YOU WON!')
    elResult.classList.toggle('hidden')
  }
}

function renderAlphabet() {
  let list = ''
  alphabet.forEach(function (letter) {
    list = list + `
      <button onclick="selectLetter(event, '${letter}')">${letter}</button>
    `
  })
  elButtons.innerHTML = list
}

renderMaskedWord()
renderAlphabet()