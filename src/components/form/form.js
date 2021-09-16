let inputPhone = document.querySelector( '.input-phone' );
let inputName = document.querySelector('.input-name');
let btnClear = document.querySelector('.form__button-clear');

btnClear.addEventListener('click', (e) => {
  e.preventDefault()
  inputPhone.value = '';
  btnClear.classList.add('hide')
  inputPhone.style.borderBottomColor = '#9D9B9B'
})

function setValidation() {

  inputPhone.addEventListener('focus', () => {
    inputPhone.style.color = '#9D9B9B'
    if(inputPhone.value.length > 12) {
      // input.style.borderBottomColor = '#BF4A42'
      inputPhone.style.color = '#BF4A42'
      btnClear.classList.remove('hide')
      inputPhone.classList.add('error')
    } else {
      inputPhone.style.borderBottomColor = '#9D9B9B'
      inputPhone.classList.remove('error')
    }
  })

  inputPhone.addEventListener('blur', () => {

    if(inputPhone.value.length < 11 ) {
      btnClear.classList.remove('hide')
      inputPhone.classList.add('error')
      // input.style.borderBottomColor = '#BF4A42';
      inputPhone.style.color = '#BF4A42'
    } else {
      btnClear.classList.add('hide')
    }
  })
}
setValidation()

