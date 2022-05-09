const infoPLus = document.querySelector('[data-js="plusinfo"]')
const buttonPlus = document.querySelector('[data-js="plusbutton"]')
const close = document.querySelector('[data-js="close"]')


buttonPlus.addEventListener('click', ()=> {

infoPLus.classList.toggle('off')



})

close.addEventListener('click', ()=> {

    infoPLus.classList.toggle('off')
    
    
})


