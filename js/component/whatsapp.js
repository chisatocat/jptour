document.addEventListener("DOMContentLoaded", () => {
  // Function to create WhatsApp icon
  function createWhatsAppIcon() {
    const whatsappIcon = document.querySelector(".whatsapp-icon");

    const anchor = document.createElement("a");
    anchor.href = "https://wa.me/85298701386?text=我想查詢日本旅行團";
    anchor.target = "_blank";

    const img = document.createElement("img");
    img.src = "./img/icon/whatsapp.png"; // Ensure this path is correct
    img.alt = "Whatsapp icon";

    anchor.appendChild(img);
    whatsappIcon.appendChild(anchor);
  }

  // Call the function to create the WhatsApp icon
  createWhatsAppIcon();
});
