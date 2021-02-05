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
const price = document.getElementById('modal-price') //precio1
const subtotal = document.getElementById('precioSubtotal') //precio1
const select = document.getElementById('select') //precio1
const precioFinal = document.getElementById('preciototal') //precio1
const totalHoodie = document.getElementById('cantidad') //precio1


console.log(select.value)
console.log(select.value)
inputBuy.addEventListener('click' , printModal)
modalClose.addEventListener('click' , close)
sizeS.addEventListener('click', selecSizeS)
sizeM.addEventListener('click', selecSizeM)
sizeL.addEventListener('click', selecSizeL)
sizeXL.addEventListener('click', selecSizeXL)
sizeXXL.addEventListener('click', selecSizeXXL)
modalInput.addEventListener('click' , buyComplete)
modelOne.addEventListener('mouseover',transitionOne)
modelTwo.addEventListener('mouseover',transitionTwo)
modelThree.addEventListener('mouseover',transitionThree)
modelOne.addEventListener('click',transitionOne)
modelTwo.addEventListener('click',transitionTwo)
modelThree.addEventListener('click',transitionThree)



function printModal() {
  modal.style.display = 'block';
  modal.style.background = 'white';
  modal.style.border = '3px solid black';
  modal.style.boxShadow = '5px 0 0 5px rgba(20px , 10px , 0, .5);';
  bodyContainer.style.background = 'black'
  container.style.position = 'relative'
  container.style.opacity = '.2'
  totalHoodie.textContent = select.value

  const precio = 80;
  const total = Number(select.value) * precio ;
  console.log(total)
  price.textContent = total
  const priceSub = subtotal.textContent = total
  precioFinal.textContent = priceSub + 5
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
    setTimeout(() => {
      modelOne.src = 'images/1.2.png'
    }, 1000);
    setTimeout(() => {
      modelOne.src = 'images/1.3.png'
    }, 2000);
    setTimeout(() => {
      modelOne.src = 'images/verde.png'
    },3000);
}

function transitionTwo() {
  setTimeout(() => {
    modelTwo.src = 'images/2.1.png'
  }, 1000);
  setTimeout(() => {
    modelTwo.src = 'images/2.3.png'
  }, 2000);
  setTimeout(() => {
    modelTwo.src = 'images/2.2.png'
  },3000);
}

function transitionThree() {
  setTimeout(() => {
    modelThree.src = 'images/3.1.png'
  }, 1000);
  setTimeout(() => {
    modelThree.src = 'images/3.2.png'
  }, 2000);
  setTimeout(() => {
    modelThree.src = 'images/blanco1.png'
  }, 3000);
}

function printPrice() {
  price.textContent = total
}

