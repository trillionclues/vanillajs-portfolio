const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
 // change website theme
 document.body.classList.toggle('dark')
})