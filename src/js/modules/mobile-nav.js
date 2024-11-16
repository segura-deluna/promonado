function mobileNav() {
  // Получаем элементы
  const burgerMenu = document.getElementById('burgerMenu');
  const menu = document.getElementById('menu');

  // Добавляем обработчик клика по бургер-меню
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

export default mobileNav;
