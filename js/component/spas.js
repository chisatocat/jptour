import spas from "../data/spas.js";

document.addEventListener("DOMContentLoaded", () => {
  const spaContainer = document.getElementById("spaContainer");

  // Create the jumbotron at the top
  spaContainer.innerHTML = `
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-info">
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">九州溫泉</h1>
            <p class="lead my-3">
                日本以溫泉聞名全世界，日本九州被稱為溫泉天國，九州各縣有著各式各樣的溫泉地勝地和温泉酒店，毎年吸引不少人前往泡溫泉。以下就為大家整理了七大人氣九州溫泉♨️，別府溫泉、湯布院溫泉、黑川溫泉等，以及各大熱門溫泉酒店🏨推介，喜歡泡溫泉的你，不妨來一趟九州溫泉體驗之旅啦！
            </p>
        </div>
    </div>
    <hr class="featurette-divider" />
`;

  // Generate featurettes for each spa
  spas.forEach((spa, index) => {
    spaContainer.innerHTML += `
        <div class="row featurette">
            <div class="col-md-7 ${index % 2 === 0 ? "" : "order-md-2"}">
                <h2 class="featurette-heading">
                    ${index + 1} ${spa.title} <span class="text-muted"></span>
                </h2>
                <p class="lead">${spa.description}</p>
                <ul>
                    <li>地址：${spa.address}</li>
                    <li>泉質：${spa.waterType}</li>
                    <li>療效：${spa.effects}</li>
                    <li>周邊景點：${spa.attractions}</li>
                </ul>
            </div>
            <div class="col-md-5 ${index % 2 === 0 ? "order-md-1" : ""}">
                <img src="${spa.image}" alt="${spa.title}" />
            </div>
        </div>
        <hr class="featurette-divider" />
    `;
  });
});
