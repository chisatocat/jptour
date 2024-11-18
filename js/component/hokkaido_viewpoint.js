import hokkaidoViewpoints from "../data/hokkaido_viewpoints_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Create the jumbotron at the top
  container.innerHTML = `
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">北海道美景</h1>
                <p class="lead my-3">想到北海道旅行？北海道四季分明，景點豐富，冬有雪山，夏有薰衣草花田，而且一年四季都享受到天然溫泉。大自然愛好者可以在北海道享受滑雪、徒步旅行以及許多其他精彩的戶外活動！喜歡享受大自然嗎？準備好你的相機，我們為你推介等北海道10大自然景點，從札幌景點、美瑛景點、旭川景點、到洞爺湖等，都是造訪北海道的不可錯過的人氣景點！</p>
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;

  // Generate the featurettes for each viewpoint
  hokkaidoViewpoints.forEach((viewpoint, index) => {
    container.innerHTML += `
            <div class="row featurette">
                <div class="col-md-7 ${index % 2 === 0 ? "" : "order-md-2"}">
                    <h2 class="featurette-heading">${viewpoint.title}
                        <span class="text-muted">${viewpoint.subtitle}</span>
                    </h2>
                    <p class="lead">${viewpoint.description}</p>
                    ${viewpoint.tips ? `<p>貼士：${viewpoint.tips}</p>` : ""}
                </div>
                <div class="col-md-5 ${index % 2 === 0 ? "" : "order-md-1"}">
                    <img src="${viewpoint.image}" alt="${
      viewpoint.title
    }" class="img-fluid"/> 
                </div>
            </div>
            <hr class="featurette-divider"/>
        `;
  });
});
