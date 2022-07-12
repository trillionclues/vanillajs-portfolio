const checkbox = document.getElementById('checkbox')
const modals = document.querySelectorAll('.modal')
const modalCover = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

checkbox.addEventListener('change', () => {
  // change website theme
  document.body.classList.toggle('dark')
})

modals.forEach((elements) => {
  // iterate throught the modal elements and apply the overlay to the target(selected) elements
  elements.addEventListener('click', function () {
    modalCover.classList.add('open-modal')
  })
})

closeBtn.addEventListener('click', function () {
  modalCover.classList.remove('open-modal')
})
