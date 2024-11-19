import shikokuCultureData from "../data/shikoku_culturedata.js";

document.addEventListener("DOMContentLoaded", () => {
  const shikokiCultureContainer = document.getElementById(
    "shikoku-culture-container"
  );

  // Create the jumbotron at the top
  shikokiCultureContainer.innerHTML = `
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary m-5">
            <div class="col-md-12 px-0">
                <h1 class="display-4 font-italic">四國的文化</h1>
                <p class="lead">與靈性之旅</p>
                
                <p class="lead my-3">四國地區以其深厚的文化底蘊和靈性傳統而著稱，吸引著無數朝聖者和文化愛好者。這裡的四國遍路連接著88座歷史悠久的寺廟，讓人們在朝聖路上尋找內心的平靜與啟發。此外，道後溫泉的療癒水流和祖谷溪谷的壯麗自然景觀，皆散發出靈性的氛圍。四國的每一個角落都融合著歷史、信仰和自然之美，讓人們在探索中深刻體驗這片土地所傳遞的智慧與和諧。</p>
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;

  // Generate the featurettes for each entertainment spot
  shikokuCultureData.forEach((spot, index) => {
    shikokiCultureContainer.innerHTML += `
            <div class="row featurette">
                <div class="mb-5 col-md-7 ${
                  index % 2 === 0 ? "" : "order-md-2"
                }">
                    <h2 class="featurette-heading mb-5">${spot.title}
                        <span class="text-muted">${spot.subtitle}</span>
                    </h2>
                    <p class="lead">${spot.description}</p>
                </div>
                <div class="col-md-5 ${index % 2 === 0 ? "" : "order-md-1"}">
                    <img src="${spot.image}" alt="${
      spot.title
    }" class="img-fluid"/> 
                </div>
            </div>
            <hr class="featurette-divider"/>
        `;
  });
});
