let input = document.querySelector( '.input-phone' );
let btnClear = document.querySelector('.form__button-clear');

btnClear.addEventListener('click', (e) => {
  e.preventDefault()
  input.value = '';
  btnClear.classList.add('hide')
  input.style.borderBottomColor = '#9D9B9B'
})

function setValidation() {

  input.addEventListener('focus', () => {
    input.style.color = '#9D9B9B'
    if(input.value.length > 12) {
      input.style.borderBottomColor = '#BF4A42'
      input.style.color = '#BF4A42'
      btnClear.classList.remove('hide')
      input.classList.add('error')
    } else {
      input.style.borderBottomColor = '#9D9B9B'
      input.classList.remove('error')
    }
  })

  input.addEventListener('blur', () => {
    if(input.value.length < 11 ) {
      btnClear.classList.remove('hide')
      input.style.borderBottomColor = '#BF4A42';
      input.style.color = '#BF4A42'
      input.classList.add('error')
    } else {
      btnClear.classList.add('hide')
    }
  })
}
setValidation()

