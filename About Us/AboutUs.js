const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menubar = document.getElementsByClassName('menubar')[0]

toggleButton.addEventListener('click', () => {
 menubar.classList.toggle('active')
})
