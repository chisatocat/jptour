function updateFooter() {
  const currentYear = new Date().getFullYear();
  const footerText = `&copy; ${currentYear} 日旅社版權所有.`;
  document.getElementById("footer").innerHTML = footerText;
}

// Execute when the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  updateFooter(); // Update the footer text
});
