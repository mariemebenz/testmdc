
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


const darkMode =document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark_mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')

})

lightMode.addEventListener('click', () =>{
    document.body.classList.remove('dark_mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')

})

/*-----type writer effect animation------------*/

const textDisplay = document.getElementById('animated-text')
const phrases = ['Tier III ', 'PCI-DSS', 'HIPAA','ISO27001','ISO9001']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()









   

  


