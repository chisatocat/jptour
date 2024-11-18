import entertainmentSpots from "../data/honshu_spotsdata.js";

document.addEventListener("DOMContentLoaded", () => {
  const entertainmentContainer = document.getElementById(
    "honshu-spot-container"
  );

  // Create the jumbotron at the top
  entertainmentContainer.innerHTML = `
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">本州娛樂</h1>
                <p class="lead my-3">去JAPAN應該這樣玩！推薦4個「美景本州」不容錯過的旅遊秘境！</p>
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;

  // Generate the featurettes for each entertainment spot
  entertainmentSpots.forEach((spot, index) => {
    entertainmentContainer.innerHTML += `
            <div class="row featurette">
                <div class="col-md-7 ${index % 2 === 0 ? "" : "order-md-2"}">
                    <h2 class="featurette-heading">${spot.title}
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
