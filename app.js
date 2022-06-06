const board = document.querySelector('#board')
const colors = ['#e60bee', '#f1ff28', '#06f806', '#f8325d', '#401fff', '#fd19b9', '#2dabffe0', '#0bdfee',]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))
  
  /*square.addEventListener('mouseleave', setColor(square))
  square.addEventListener('mouseleave', removeColor(square))*/

  board.append(square)
} 

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

/* function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}*/

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

/* function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`*/

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

/*function getRandomColor() {
return colorsMath.floor(Math.random() * colors.length)
}*/