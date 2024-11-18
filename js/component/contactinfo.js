import { socialLinks, contactItems } from "../data/companyinfo.js";

document.addEventListener("DOMContentLoaded", () => {
  // Function to create the contact item container
  function createContactItemContainer() {
    const contactItemContainer = document.querySelector(".contact-item-container");

    contactItems.forEach((item) => {
      const contactItem = document.createElement("div");
      contactItem.className = "contact-item";

      const icon = document.createElement("i");
      icon.className = `fa-solid ${item.icon}`;
      contactItem.appendChild(icon);

      const text = document.createElement("p");
      text.textContent = item.text;
      contactItem.appendChild(text);

      contactItemContainer.appendChild(contactItem);
    });

    // Create social item container
    const socialItemContainer = document.createElement("div");
    socialItemContainer.className = "social-item-container";

    socialLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";

      const socialIcon = document.createElement("i");
      socialIcon.className = `fa-brands ${link.icon}`;
      anchor.appendChild(socialIcon);

      socialItemContainer.appendChild(anchor);
    });

    contactItemContainer.appendChild(socialItemContainer);
  }

  // Call the function to create the contact item container
  createContactItemContainer();
});
