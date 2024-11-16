// Выпадашка

function showDropdown() {
  // Находим все кнопки выпадающих списков
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  // Добавляем обработчик событий для каждой кнопки
  dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Находим соответствующий выпадающий список
      const dropdownContent = button.nextElementSibling;

      // Переключаем видимость списка
      dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Закрываем выпадающий список при клике вне его
  window.addEventListener('click', (event) => {
    dropdownButtons.forEach((button) => {
      const dropdownContent = button.nextElementSibling;
      if (
        !button.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.style.display = 'none';
      }
    });
  });
}

export default showDropdown;
