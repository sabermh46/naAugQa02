// write your JavaScript here

const navMenu = document.querySelector('.mMenu.hidden')
const navLinks = document.querySelector('ul.links')

navMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
    navLinks.classList.toggle('active')
})