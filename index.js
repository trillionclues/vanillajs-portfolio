const checkbox = document.getElementById('checkbox')
const modals = document.querySelectorAll('.modal')
const modalCover = document.querySelector('.modal-overlay')
const modalContain = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.close-btn')

// DARK MODE SWITCH
checkbox.addEventListener('change', () => {
  // change website theme
  document.body.classList.toggle('dark')
})

// MODAL DESPLAY
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton)
  const modalContainer = document.getElementById(modalContent)

  if (openBtn && modalContainer) {
    openBtn.addEventListener('click', () => {
      modalContainer.classList.add('show-modal')
    })
  }
}

showModal('open_modal', 'modal-container')

// CLOSE MODAL
const closeBtns = document.querySelectorAll('.close-modal')

function closeModal() {
  const modalContainer = document.getElementById('modal-container')
  modalContainer.classList.remove('show-modal')
}

closeBtns.forEach((mod) => mod.addEventListener('click', closeModal))
