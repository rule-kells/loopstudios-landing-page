const nav = document.querySelector('.nav')
const navToggle = nav.querySelector('.nav__toggle')

navToggle.addEventListener('click', _ => {
    nav.classList.toggle('is-selected')
})