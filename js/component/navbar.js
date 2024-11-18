import { navigationData } from "../data/navigationdata.js";

// Function to render the navigation menu
function renderNavigation() {
  const navList = document.getElementById("nav-list");

  navigationData.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "nav-list-item";

    const linkContainer = document.createElement("div");
    linkContainer.className = "nav-list-link-container";

    const link = document.createElement("a");
    link.href = item.link;

    const img = document.createElement("img");
    img.src = item.icon;
    img.alt = item.title;

    const title = document.createElement("p");
    title.textContent = item.title;

    link.appendChild(img);
    link.appendChild(title);
    linkContainer.appendChild(link);
    listItem.appendChild(linkContainer);

    // Check if the item has a submenu
    if (item.submenu && item.submenu.length > 0) {
      const submenu = document.createElement("ul");
      submenu.className = "submenu";

      item.submenu.forEach((subitem) => {
        const submenuItem = document.createElement("li");
        submenuItem.className = "submenu-item";

        const subLink = document.createElement("a");
        subLink.href = subitem.link;

        const subImgContainer = document.createElement("div");
        subImgContainer.className = "submenu-item-image-container";

        const subImg = document.createElement("img");
        subImg.src = subitem.image;
        subImg.alt = subitem.title;

        const subTitle = document.createElement("h3");
        subTitle.textContent = subitem.title;

        subImgContainer.appendChild(subImg);
        subLink.appendChild(subImgContainer);
        subLink.appendChild(subTitle);
        submenuItem.appendChild(subLink);
        submenu.appendChild(submenuItem);
      });
      listItem.appendChild(submenu);
    }

    navList.appendChild(listItem);
  });
}

// Call the function to render the navigation menu
document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();
});
