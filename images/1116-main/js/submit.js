document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Get form data

    console.log("AAAAAAA");

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("success-message").style.opacity = 1; // Show success message
          this.reset(); // Reset the form
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        document.getElementById("error-message").style.display = "block"; // Show error message
      });
  });
