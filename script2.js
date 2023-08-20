document.addEventListener("DOMContentLoaded", function() {
    const expandButton = document.getElementById("open-btn");
    const expandButtonText = document.getElementById("open-btn-text");
    const expandButtonIcon = document.getElementById("open-btn-icon");
    const pageContainer = document.querySelector(".realizacje");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    expandButton.addEventListener("click", function() {
      pageContainer.classList.toggle("opened");
  
      if (pageContainer.classList.contains("opened")) {
        expandButtonText.textContent = "Zwiń";
        expandButtonIcon.textContent = "↑";
      } else {
        expandButtonText.textContent = "Rozwiń";
        expandButtonIcon.textContent = "↓";
      }
    });
  
    $(galleryItems).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });