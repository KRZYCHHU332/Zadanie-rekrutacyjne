const images = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg","./images/image4.jpg"];
let currentIndex = 0;

const imagePanel = document.querySelector(".image-panel img");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

function updateImage() {
  imagePanel.src = images[currentIndex];
}

prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Initial image update
updateImage();