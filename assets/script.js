const pauseIcon = document.getElementById('pause-btn')
const closeIcon = document.getElementById('close-btn')
const restartIcon = document.getElementsByClassName('restart-btn')

const modalRestart = document.querySelector('div.pause-modal')
const modalWin = document.querySelector('div.restart-modal')
const paragraphWin = document.querySelector('div.restart-modal p')

const mainDiv = document.getElementById('main-div')
const letters = document.querySelectorAll('main .letters-section .letter')

const framesGibbet = document.querySelectorAll('.img-gibbet')

const fruits = [
  'abacate',
  'abacaxi',
  'acerola',
  'ameixa',
  'amora',
  'banana',
  'caju',
  'carambola',
  'cereja',
  'coco',
  'figo',
  'goiaba',
  'jaca',
  'kiwi',
  'manga',
  'laranja',
  'marmelo',
  'melancia',
  'pera',
  'tangerina',
  'nectarina',
  'pitanga',
  'umbu',
  'morango',
  'tamarindo',
  'jenipapo',
  'murici',
  'pequi',
  'bacuri',
  'graviola',
  'sapoti',
  'grumixama',
  'abiu',
  'mangaba',
  'siriguela',
  'rambutan',
  'feijoa',
  'pomelo',
  'clementina',
  'lima',
  'araticum',
  'bacaba',
  'buriti',
  'camu-camu',
  'jabuticaba',
  'uva',
  'mamoncillo',
  'marolo',
  'pitaya',
  'santol',
  'maca',
  'melao',
  'mirtilo',
  'pessego',
  'cambuci',
  'groselha',
  'maracuja',
  'durian',
  'lichia',
  'mangostao',
]

const fruit = fruits[Math.floor(Math.random() * fruits.length)]
const randomFruit = fruit.toUpperCase()
console.log(randomFruit)

let palavraMontada = ''
let ganhou = false

for (let i = 0; i < randomFruit.length; i++) {
  const childrenDiv = document.createElement('div')
  childrenDiv.classList.add('letter-from-word')

  const span = document.createElement('span')
  const decorationDiv = document.createElement('div')

  childrenDiv.append(span, decorationDiv)

  mainDiv.appendChild(childrenDiv)
}

for (let j = 0; j < letters.length; j++) {
  const letter = letters[j]

  letter.addEventListener('click', () => {
    const letterValue = letter.textContent

    let errou = true

    for (let k = 0; k < randomFruit.length; k++) {
      const letter = randomFruit[k]

      if (letterValue === letter) {
        const letterFromWord = document.querySelector(
          `.letter-from-word:nth-child(${k + 1}) span`
        )

        letterFromWord.textContent = letterValue
        palavraMontada += letterValue

        verificarPalavra()

        if (ganhou) {
          setTimeout(() => {
            paragraphWin.textContent = `You win! The word was: ${randomFruit}`
            modalWin.classList.remove('hidden')
            playAgain()
          }, 500)
        }
        errou = false
      }
    }

    function verificarPalavra() {
      if (palavraMontada.length === randomFruit.length) {
        return (ganhou = true)
      }
    }

    if (errou) {
      for (let l = 0; l < framesGibbet.length; l++) {
        const frame = framesGibbet[l]

        if (frame.classList.contains('hidden')) {
          frame.classList.remove('hidden')
          break
        }

        if (l === framesGibbet.length - 1) {
          modalRestart.classList.remove('hidden')
          document.body.style.overflow = 'hidden'
          playAgain()
        }
      }
    }
  })
}

function playAgain() {
  for (let m = 0; m < restartIcon.length; m++) {
    const icon = restartIcon[m]
    icon.style.cursor = 'pointer'

    icon.addEventListener('click', () => {
      location.reload()
    })
  }
}

pauseIcon.addEventListener('click', () => {
  modalRestart.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
})

closeIcon.addEventListener('click', () => {
  modalRestart.classList.add('hidden')
})
