import travelPackages from "../data/travel_package_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");

  const flashPackageContainer = document.getElementById(
    "flash-package-container"
  );

  // Create the jumbotron
  const jumbotron = `
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-info">
            <div class="col-md-12 px-0">
                <h1 class="display-4 font-italic">東瀛自由行</h1>
                <p class="lead my-3">
                    無論是想與小朋友一齊去主題樂園; 一家大小去滑雪; 抑或和閨密一同賞花、賞紅葉; 
                    週末忙裡偷閒度假，或是盡享悠長假期，我們的精選自遊行套票都能滿足您的需求。立即挑選適合您的套票，享受非一般的假期!
                </p>
            </div>
        </div>
        <hr />
    `;

  // Append jumbotron to the container
  container.innerHTML += jumbotron;

  // Create the row for card items
  const row = document.createElement("div");
  row.classList.add("row", "row-cols-1", "row-cols-md-3");

  travelPackages.forEach((flashPackage) => {
    const cardHTML = `
            <div class="col mb-4">
                <div class="card h-100">
                    <img src="${flashPackage.image}" class="card-img-top" alt="${flashPackage.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${flashPackage.title}</h5>
                        <p class="card-text">${flashPackage.description}</p>
                        <p class="card-text">${flashPackage.date}</p>
                        <p class="card-text">${flashPackage.airline}</p>
                        <p class="card-subtitle text-danger">${flashPackage.price}</p>
                    </div>
                </div>
            </div>
        `;

    // Append each card to the row
    row.innerHTML += cardHTML;
  });

  // Append the row to the container
  flashPackageContainer.appendChild(row);
});
