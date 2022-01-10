const createBtn = document.getElementById('criar-carta') 
const theLetter = document.getElementById('carta-gerada')
function createLetter() {
    const letterValue = document.getElementById('carta-texto').value
    let makeTheLetter = '<span>'
    for (let i=0; i<letterValue.length; i+=1) {
        if (letterValue[i] === ' ') {
            makeTheLetter += '</span> <span>'
        } else {
            makeTheLetter += letterValue[i]
        }
    }
    if (letterValue === '' || letterValue === ' ') {
        theLetter.innerText = 'Por favor, digite o conteúdo da carta.'
    } else {
        theLetter.innerHTML = makeTheLetter
        getRandomStyles()
        counter()
    }
    
}
createBtn.addEventListener('click', createLetter)

const letterStyle = {
    style: ['newspaper', 'magazine1', 'magazine2'],
    size: ['medium', 'big', 'reallybig'],
    rotate: ['rotateleft', 'rotateright'],
    skew: ['skewleft', 'skewright']
}

function generateRandomStyles() {
    theClasses = []
    theClasses.push(letterStyle.style[(Math.floor(Math.random() * 3))])
    theClasses.push(letterStyle.size[(Math.floor(Math.random() * 3))])
    theClasses.push(letterStyle.rotate[(Math.floor(Math.random() * 2))])
    theClasses.push(letterStyle.skew[(Math.floor(Math.random() * 2))])
}

function getRandomStyles() {
    const spanQty = document.getElementsByTagName('span').length
    const spanWords = document.getElementsByTagName('span')
    for (let i=0; i<spanQty; i+=1) {
        generateRandomStyles()
        letterPublished[i].addEventListener('click', updateSingleStyle)
        for (let y=0; y<4; y+=1) {
            spanWords[i].classList.add(`${theClasses[y]}`)
        }
    }
}

const letterPublished = document.getElementById('carta-gerada').children
function updateSingleStyle(e) {
    let currentTarget = e.target
    currentTarget.className = ''
    generateRandomStyles()
    for (let i=0; i<4; i+=1) {
        currentTarget.classList.add(`${theClasses[i]}`)
    }
}

function counter() {
    const letterCounter = document.getElementById('carta-contador')
    letterCounter.innerText = document.getElementsByTagName('span').length
}