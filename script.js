const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Chyba coś się zacięło i źle kliknęłaś ", images:"images/cat-02.gif"},
  {text:"Ej ej, TAK jest po lewej stronie", images:"images/cat-03.gif"},
  {text:"Jula, przestań żartować", images:"images/cat-04.gif"},
  {text:"DOBRA TERAZ TO PRZESADA MENDO!", images:"images/cat-05.gif"},
]
const ohyes = {text:"Innej opcji nie było, forever together, jesteś najcudowniejsza! <3", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Tak"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Nie'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})