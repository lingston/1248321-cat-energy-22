let navMain = document.querySelector('.main-nav');
let navToggle= document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(){
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
})

const input = document.querySelector('.comparison__input')
const buttons = document.querySelectorAll('.comparison__btn')

console.log(buttons)

const comparison = document.querySelector('.example__comparison')

input.addEventListener('input', function(evt){
const value = (100 - input.value)  + '%'
comparison.style.setProperty('--comparison', value)
})

for(btn of buttons){
btn.addEventListener('click', (evt) => {
console.log(evt.target.dataset.value)
const btnDataValue = evt.target.dataset.value
if (btnDataValue > 0)
{
  comparison.style.setProperty('--psevdo-left', '35px')
} else {
  comparison.style.setProperty('--psevdo-left', '0')
}
comparison.style.setProperty('--comparison', btnDataValue + '%')
input.value = (100 - btnDataValue)

})
}
