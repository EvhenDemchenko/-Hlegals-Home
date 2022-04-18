const HEADER = document.querySelector('enter class')
const EFFECT = document.querySelector('.enter class')

const CLOSE = document.querySelector('.close').addEventListener('click',() => {
    HEADER.classList.remove('qqq')
    EFFECT.classList.remove('open')
})
const BURGER = document.querySelector('.burger-menu__img').addEventListener('click', ()=>{
    HEADER.classList.add('qqq')
    EFFECT.classList.add('open')
})
