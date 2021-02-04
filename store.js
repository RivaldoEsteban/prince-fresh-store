const modal = document.getElementById('main-modal')
const inputAddToCart = document.getElementById('input1')
const inputBuy  = document.getElementById('input2')
const modalClose = document.getElementById('close')
const sizeS = document.getElementById('sizeS')
const sizeM = document.getElementById('sizeM')
const sizeL = document.getElementById('sizeL')
const sizeXL = document.getElementById('sizeXL')
const sizeXXL = document.getElementById('sizeXXL')
const changePosition1 = document.getElementById('image1')
const changePosition2 = document.getElementById('image2')
const changePosition3 = document.getElementById('image3')
const container = document.getElementById('container')
const bodyContainer = document.getElementById('body-container')
const modalInput = document.getElementById('modal-input')
const modelOne = document.getElementById('image1')
const modelTwo = document.getElementById('image2')
const modelThree = document.getElementById('image3')

inputBuy.addEventListener('click' , printModal)
modalClose.addEventListener('click' , close)
sizeS.addEventListener('click', selecSizeS)
sizeM.addEventListener('click', selecSizeM)
sizeL.addEventListener('click', selecSizeL)
sizeXL.addEventListener('click', selecSizeXL)
sizeXXL.addEventListener('click', selecSizeXXL)
modalInput.addEventListener('click' , buyComplete)

function printModal() {
  modal.style.display = 'block';
  modal.style.background = 'white';
  modal.style.border = '3px solid black';
  modal.style.boxShadow = '5px 0 0 5px rgba(20px , 10px , 0, .5);';
  bodyContainer.style.background = 'black'
  container.style.position = 'relative'
  container.style.opacity = '.2'
}

function close() {
  modal.style.display = 'none';
  container.style.background = 'none'
  container.style.opacity = '1'

}

function selecSizeS() {
  sizeS.style.color = 'white'
  sizeS.style.background = '#4276FB'
  sizeS.style.border = 'none'
}
function selecSizeM() {
  sizeM.style.color = 'white'
  sizeM.style.background = '#4276FB'
  sizeM.style.border = 'none'
}
function selecSizeL() {
  sizeL.style.color = 'white'
  sizeL.style.background = '#4276FB'
  sizeL.style.border = 'none'
}
function selecSizeXL() {
  sizeXL.style.color = 'white'
  sizeXL.style.background = '#4276FB'
  sizeXL.style.border = 'none'
}
function selecSizeXXL() {
  sizeXXL.style.color = 'white'
  sizeXXL.style.background = '#4276FB'
  sizeXXL.style.border = 'none'
}
function changeImage() {
  changePosition1.textContent = 'hola'
}
function buyComplete () {
  alert('Felicidades! Compra realizada...');
  close();
}

function transitionOne() {
  setInterval(() => {
    modelOne.src = 'images/1.2.png'
    // console.log(modelOne)
  }, 3000);
  setInterval(() => {
    modelOne.src = 'images/1.3.png'
    // console.log(modelOne)
  }, 6000);
  setInterval(() => {
    modelOne.src = 'images/verde.png'
    // console.log(modelOne)
  },9000);
}
transitionOne();

function transitionTwo() {
  setInterval(() => {
    modelTwo.src = 'images/2.1.png'
    // console.log(modelOne)
  }, 3000);
  setInterval(() => {
    modelTwo.src = 'images/2.3.png'
    // console.log(modelOne)
  }, 6000);
  setInterval(() => {
    modelTwo.src = 'images/2.2.png'
    // console.log(modelOne)
  },9000);
}
transitionTwo();

function transitionThree() {
  setInterval(() => {
    modelThree.src = 'images/3.1.png'
    // console.log(modelOne)
  }, 3000);
  setInterval(() => {
    modelThree.src = 'images/3.2.png'
    // console.log(modelOne)
  }, 6000);
  setInterval(() => {
    modelThree.src = 'images/blanco1.png'
    // console.log(modelOne)
  },9000);
}
transitionThree();