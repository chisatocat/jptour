import crafts from "../data/craftsmanship.js";

document.addEventListener("DOMContentLoaded", () => {
  const craftContainer = document.getElementById("craft-container");

  // Create the jumbotron at the top
  craftContainer.innerHTML = `
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-info">
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">九州的傳統工藝</h1>
            <p class="lead my-3">九州地方目前共有21項傳統工藝品，其種類包括陶瓷器、紡織物、金工藝品等各式各樣...</p>
        </div>
    </div>
    <hr class="featurette-divider"/>
`;

  // Generate the featurettes for each craft
  crafts.forEach((craft, index) => {
    craftContainer.innerHTML += `
        <div class="row featurette">
            <div class="col-md-7 ${index % 2 === 0 ? "" : "order-md-2"}">
                <h2 class="featurette-heading">${(index + 1)
                  .toString()
                  .padStart(2, "0")} ${craft.title} <span class="text-muted">${
      craft.subtitle
    }</span></h2>
                <p class="lead">${craft.description}</p>
            </div>
            <div class="col-md-5 ${index % 2 === 0 ? "" : "order-md-1"}">
                <img src="${craft.image}" alt="${craft.subtitle}" />
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;
  });
});
