import shikokuFestivalData from "../data/shikoku_festivaldata.js";

document.addEventListener("DOMContentLoaded", () => {
  const shikokiFestivalContainer = document.getElementById("shikoku-festival-container");

  // Create the jumbotron at the top
  shikokiFestivalContainer.innerHTML = `
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-secondary m-5">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">四國文化探索</h1>
                <p class="lead">祭典活動的魅力</p>
                <p class="lead my-3">在日本四國地區，祭典活動是當地文化的重要組成部分，展示了獨特的傳統和習俗，增進社區凝聚力。每年，德島的阿波舞、香川的讃岐うどん祭、愛媛的道後溫泉祭和高知的よさこい祭等吸引了大量遊客。這些活動結合華麗的服飾、動人的舞蹈、傳統音樂及當地美食，讓參加者深入體驗四國的獨特風情，並加深對這片土地的理解與熱愛。</p>
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;

  // Generate the featurettes for each entertainment spot
  shikokuFestivalData.forEach((spot, index) => {
    shikokiFestivalContainer.innerHTML += `
            <div class="row featurette">
                <div class="mb-5 col-md-7 ${index % 2 === 0 ? "" : "order-md-2"}">
                    <h2 class="featurette-heading mb-5">${spot.title}
                        <span class="text-muted">${spot.subtitle}</span>
                    </h2>
                    <p class="lead">${spot.description}</p>
                </div>
                <div class="col-md-5 ${index % 2 === 0 ? "" : "order-md-1"}">
                    <img src="${spot.image}" alt="${spot.title}" class="img-fluid"/> 
                </div>
            </div>
            <hr class="featurette-divider"/>
        `;
  });
});
