// Реализация переключения вкладок
const tabNames = document.querySelectorAll(".tab_name");
const tabs = document.querySelectorAll(".tab");

tabNames.forEach((tabName, index) => {
  tabName.addEventListener("click", () => {
    // Удалить класс active у всех вкладок и контента
    tabNames.forEach((tn) => tn.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Добавить класс active только для выбранного
    tabName.classList.add("active");
    tabs[index].classList.add("active");
  });
});

// Реализация выбора фотографий
const currentImage = document.querySelector(".photos .current img");
const previewImages = document.querySelectorAll(".photos .preview .image img");

previewImages.forEach((preview) => {
  preview.addEventListener("click", () => {
    // Удалить класс active у всех превью
    previewImages.forEach((img) =>
      img.parentElement.classList.remove("active")
    );

    // Обновить основное изображение
    currentImage.src = preview.src;

    // Добавить класс active к выбранному превью
    preview.parentElement.classList.add("active");
  });
});
