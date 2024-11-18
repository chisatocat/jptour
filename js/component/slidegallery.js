import { galleryData } from "../data/galleryData.js";

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.getElementById("slides");
  let currentIndex = 0;

  // Load images from the external data file
  galleryData.forEach((image) => {
    console.log(image);

    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `<img src="${image}">`;
    slidesContainer.appendChild(slide);
  });

  const totalSlides = galleryData.length;

  // Function to update slide position
  function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  // Auto slide functionality
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to start
    updateSlidePosition();
  }, 3000); // Change slide every 3 seconds
});
