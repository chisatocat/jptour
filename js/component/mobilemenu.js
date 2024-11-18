import { menuItems } from "../data/menuitems.js";

const mobileNavList = document.querySelector(".mobile-nav-list");

menuItems.forEach((item) => {
  const li = document.createElement("li");
  const container = document.createElement("div");
  container.className = "mobile-nav-list-item-container";

  const link = document.createElement("a");
  link.href = item.href;

  const img = document.createElement("img");
  img.src = item.imgSrc;
  img.alt = "";

  const h4 = document.createElement("h4");
  h4.textContent = item.text;

  link.appendChild(img);
  container.appendChild(link);
  container.appendChild(h4);
  li.appendChild(container);
  mobileNavList.appendChild(li);
});
