function burgerMenu() {
  let buttonBurger = document.querySelector('.burger');
  let menu = document.querySelector('.header__wrap-menu');
  let menuLink = document.querySelectorAll('.menu__link');
  let body = document.querySelector('body')

  buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('burger_active');
    menu.classList.toggle('header__wrap-menu_active');
    body.classList.toggle('overflow-hidden');
  });

  menuLink.forEach(item => {
    item.addEventListener('click', () => {
      buttonBurger.classList.remove('burger_active');
      menu.classList.remove('header__wrap-menu_active');
      body.classList.remove('overflow-hidden');
    });
  });


}

burgerMenu();
