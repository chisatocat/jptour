import { backgroundImage } from "../js/data/resource.js";

document.addEventListener("DOMContentLoaded", () => {
  // Function to select a random image
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImage.length);
    return backgroundImage[randomIndex];
  }

  // Set the random image as the background
  document.getElementById(
    "particles-js"
  ).style.backgroundImage = `url('${getRandomImage()}')`;
});
