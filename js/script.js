let toggleBtn = document.querySelector(".toggle-button");
const mobileNavList = document.querySelector(".mobile-nav-list");

toggleBtn.addEventListener("click", () => {
  mobileNavList.classList.toggle("active");
});

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  // Check if the click was outside the menu and the button
  if (!mobileNavList.contains(event.target) && !toggleBtn.contains(event.target)) {
    if (mobileNavList.classList.contains("active")) mobileNavList.classList.remove("active");
  }
});

// document.addEventListener("scroll", function (event) {
//   if (mobileNavList.classList.contains("active")) mobileNavList.classList.remove("active");
// });
