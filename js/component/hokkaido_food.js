import hokkaidoFoods from "../data/hokkaido_food_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("food-container");

  // Create the jumbotron at the top
  container.innerHTML = `
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">北海道美食</h1>
                <p class="lead my-3">北海道必吃美食有哪些？位於日本最北端的北海道，因其幅員廣大，有不少人去玩會選擇自駕行程，為了節省時間有效率地移動，最好事先調查想吃什麼！以下整理出15種北海道經典美食供大家參考。</p>
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;

  // Generate the featurettes for each food item
  hokkaidoFoods.forEach((food, index) => {
    container.innerHTML += `
            <div class="row featurette">
                <div class="col-md-7 ${index % 2 === 0 ? "" : "order-md-2"}">
                    <h2 class="featurette-heading">${food.title}
                        <span class="text-muted">${food.subtitle}</span>
                    </h2>
                    <p class="lead">${food.description}</p>
                    <p>${food.additionalInfo}</p>
                </div>
                <div class="col-md-5 ${index % 2 === 0 ? "" : "order-md-1"}">
                    <img src="${food.image}" alt="${
      food.title
    }" class="img-fluid"/> 
                </div>
            </div>
            <hr class="featurette-divider"/>
        `;
  });
});
