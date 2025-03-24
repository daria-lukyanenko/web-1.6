import '../scss/style.scss'
import '../js/swiper.js'

const buttonToggleText = document.getElementById('btn-toggle-text')
const toggleText = document.querySelector('.about-company__text--toggle')
const hiddenText = document.querySelector('.about-company__text--hidden')

let isTextVisible = false
const toggleTextVisible = () => {
  isTextVisible = !isTextVisible

  if (isTextVisible) {
    toggleText.classList.add('visible')
    hiddenText.classList.add('visible') // Показываем скрытый текст
    buttonToggleText.querySelector('.button__text').textContent = 'Скрыть'
    buttonToggleText
      .querySelector('.button__icon')
      .classList.add('button__icon-rotate')
  } else {
    toggleText.classList.remove('visible')
    hiddenText.classList.remove('visible') // Скрываем скрытый текст
    buttonToggleText.querySelector('.button__text').textContent = 'Читать далее'
    buttonToggleText
      .querySelector('.button__icon')
      .classList.remove('button__icon-rotate')
  }
}

buttonToggleText.addEventListener('click', toggleTextVisible)

const buttonToggleBrands = document.getElementById('btn-toggle-brands')
const tabletBrandsItems = document.querySelectorAll(
  '.brands__item:nth-last-child(-n+5)'
)
const desktopBrandsItems = document.querySelectorAll(
  '.brands__item:nth-last-child(-n+3)'
)

let isBrandsVisible = false

const toggleBrands = () => {
  if (isBrandsVisible) {
    if (window.innerWidth >= 1366) {
      for (let i = 0; i < desktopBrandsItems.length; i++) {
        desktopBrandsItems[i].style.display = 'none'
      }
    } else if (window.innerWidth >= 768) {
      for (let i = 0; i < tabletBrandsItems.length; i++) {
        tabletBrandsItems[i].style.display = 'none'
      }
    }
    buttonToggleBrands.querySelector('.button__text').textContent =
      'Показать все'
    buttonToggleBrands
      .querySelector('.button__icon')
      .classList.remove('button__icon-rotate')
  } else {
    if (window.innerWidth >= 1366) {
      for (let i = 0; i < desktopBrandsItems.length; i++) {
        desktopBrandsItems[i].style.display = 'flex'
      }
    } else if (window.innerWidth >= 768) {
      for (let i = 0; i < tabletBrandsItems.length; i++) {
        tabletBrandsItems[i].style.display = 'flex'
      }
    }
    buttonToggleBrands.querySelector('.button__text').textContent = 'Скрыть'
    buttonToggleBrands
      .querySelector('.button__icon')
      .classList.add('button__icon-rotate')
  }
  isBrandsVisible = !isBrandsVisible
}

buttonToggleBrands.addEventListener('click', toggleBrands)

const buttonToggleEquipment = document.getElementById('btn-toggle-equipment')
const tabletEquipmentItems = document.querySelectorAll(
  '.equipment-repair__item:nth-last-child(-n+8)'
)
const desktopEquipmentItems = document.querySelectorAll(
  '.equipment-repair__item:nth-last-child(-n+7)'
)

let isEquipmentVisible = false

const toggleEquipment = () => {
  if (isEquipmentVisible) {
    if (window.innerWidth >= 1366) {
      for (let i = 0; i < desktopEquipmentItems.length; i++) {
        desktopEquipmentItems[i].style.display = 'none'
      }
    } else if (window.innerWidth >= 768) {
      for (let i = 0; i < tabletEquipmentItems.length; i++) {
        tabletEquipmentItems[i].style.display = 'none'
      }
    }
    buttonToggleEquipment.querySelector('.button__text').textContent =
      'Показать все'
    buttonToggleEquipment
      .querySelector('.button__icon')
      .classList.remove('button__icon-rotate')
  } else {
    if (window.innerWidth >= 1366) {
      for (let i = 0; i < desktopEquipmentItems.length; i++) {
        desktopEquipmentItems[i].style.display = 'flex'
      }
    } else if (window.innerWidth >= 768) {
      for (let i = 0; i < tabletEquipmentItems.length; i++) {
        tabletEquipmentItems[i].style.display = 'flex'
      }
    }
    buttonToggleEquipment.querySelector('.button__text').textContent = 'Скрыть'
    buttonToggleEquipment
      .querySelector('.button__icon')
      .classList.add('button__icon-rotate')
  }
  isEquipmentVisible = !isEquipmentVisible
}

buttonToggleEquipment.addEventListener('click', toggleEquipment)

const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const feedbackForm = document.getElementById('feedback-form')
const buttonCalls = document.querySelectorAll('.button__call')
const buttonFeedbacks = document.querySelectorAll('.button__feedback')
const buttonCloseModal = document.getElementById('close-modal-btn')
const pageContainer = document.querySelector('.page-container')

const feedbackInputForm = `
  <input type="text" id="name" name="name" class="input-field" placeholder="Имя" required /><br /><br />
  <input type="tel" id="phone" name="phone" class="input-field" placeholder="Телефон" required /><br /><br />
  <input type="email" id="email" name="email" class="input-field" placeholder="Электронная почта" required /><br /><br />
  <textarea id="message" name="message" class="input-field" placeholder="Сообщение" required></textarea><br /><br />
  <p class="feedback-form__text">
    Нажимая “отправить”, вы даете согласие на
    <a class="feedback-form__link" href="">обработку персональных данных</a> и соглашаетесь с нашей
    <a class="feedback-form__link" href="">политикой конфиденциальности</a>
  </p>
  <button type="submit" class="submit-button">
    <span class="submit-button__text">Отправить</span>
    <img class="submit-button__icon" src="./img/icons/dropdown.svg" alt="Стрелка вперед" />
  </button>
`

const callInputForm = `
  <input type="tel" id="phone" name="phone" class="input-field" placeholder="Телефон" required /><br /><br />
  <p class="feedback-form__text">
    Нажимая “отправить”, вы даете согласие на
    <a class="feedback-form__link" href="">обработку персональных данных</a> и соглашаетесь с нашей
    <a class="feedback-form__link" href="">политикой конфиденциальности</a>
  </p>
  <button type="submit" class="submit-button">
    <span class="submit-button__text">Отправить</span>
    <img class="submit-button__icon" src="./img/icons/dropdown.svg" alt="Стрелка вперед" />
  </button>
`

export const openModal = (type) => {
  if (type === 'feedback') {
    modalTitle.textContent = 'Обратная связь'
    feedbackForm.innerHTML = feedbackInputForm
  } else if (type === 'call') {
    modalTitle.textContent = 'Заказать звонок'
    feedbackForm.innerHTML = callInputForm
  }
  modal.style.display = 'block'
  pageContainer.classList.add('blur')
}
buttonCalls.forEach((button) => {
  button.addEventListener('click', () => openModal('call'))
})

buttonFeedbacks.forEach((button) => {
  button.addEventListener('click', () => openModal('feedback'))
})

const closeModal = () => {
  modal.style.display = 'none'

  if (sidebarMenu.style.display === 'block') {
    return
  }
  pageContainer.classList.remove('blur')
}

buttonCloseModal.addEventListener('click', closeModal)

document.addEventListener('DOMContentLoaded', () => {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    console.log('Имя:', name)
    console.log('Телефон:', phone)
    console.log('Электронная почта:', email)
    console.log('Сообщение:', message)

    closeModal()
  })
})

const sidebarMenu = document.getElementById('sidebar-vertical-menu')
const openMainMenuButton = document.getElementById('open-main-menu-btn')
const closeMainMenuButton = document.getElementById('close-main-menu-btn')

openMainMenuButton.addEventListener('click', () => {
  sidebarMenu.style.display = 'block'
  pageContainer.classList.add('blur')
})

closeMainMenuButton.addEventListener('click', () => {
  sidebarMenu.style.display = 'none'
  pageContainer.classList.remove('blur')
})

document.addEventListener('click', (event) => {
  const windowWidth = window.innerWidth

  if (windowWidth >= 768 && windowWidth <= 1366) {
    if (
      !sidebarMenu.contains(event.target) &&
      !openMainMenuButton.contains(event.target) &&
      !closeMainMenuButton.contains(event.target) &&
      !modal.contains(event.target)
    ) {
      sidebarMenu.style.display = 'none'
      main.classList.remove('blur')
    }
  }
})

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth

  if (windowWidth >= 1366) {
    sidebarMenu.style.display = 'block'
    setTimeout(() => {
      main.classList.remove('blur')
    }, 100)
  } else {
    sidebarMenu.style.display = 'none'
    main.classList.add('blur')
  }
})
